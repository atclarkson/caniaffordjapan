// scripts/rehypeTables.mjs - the table system for posts (owner request 2026-11-17).
//
// Two layers, both done at build time, no JavaScript shipped:
//
// 1. Every markdown table, automatically: wrapped for styling, first cell of
//    each row becomes a row header, every cell carries its column name (so a
//    wide table can stack into cards on a phone), "Total" rows are marked,
//    and a two-column cost list is styled as a receipt ("breakdown").
//
// 2. Opt-in layouts in .mdx posts: wrap a normal markdown table in
//    <Table variant="cards"> (or "matrix", "rows", "breakdown", "table").
//    No import needed: this plugin replaces the <Table> wrapper before MDX
//    compiles it. Full guide with examples: docs/tables.md.
import { visit, SKIP } from "unist-util-visit";

const el = (tagName, properties = {}, children = []) => ({ type: "element", tagName, properties, children });
const txt = (value) => ({ type: "text", value });

function text(node) {
  if (!node) return "";
  if (node.type === "text") return node.value;
  return (node.children ?? []).map(text).join("");
}

const isTotalLabel = (s) => /\btotal\b|\ball[- ]in\b|\baltogether\b/i.test(s);
const isMoney = (s) => /[¥$]|\byen\b|円/i.test(s) && /\d/.test(s);
const norm = (s) => s.trim().toLowerCase();

/** Reads a GFM table into { head: [{text, nodes}], rows: [[{text, nodes}]] }. */
function readTable(table) {
  const rows = [];
  visit(table, "element", (node) => {
    if (node.tagName !== "tr") return;
    rows.push(node.children.filter((c) => c.type === "element" && (c.tagName === "td" || c.tagName === "th")));
    return SKIP;
  });
  const cell = (c) => ({ text: text(c).trim(), nodes: c.children });
  const [head = [], ...body] = rows;
  return { head: head.map(cell), rows: body.map((r) => r.map(cell)) };
}

/** "Seven Bank (7-Eleven)" -> name "Seven Bank", sub "7-Eleven" (plain-text cells only). */
function splitName(c) {
  const m = c.nodes.length === 1 && c.nodes[0].type === "text" ? c.text.match(/^(.+?)\s*\(([^)]+)\)$/) : null;
  return m ? { name: [txt(m[1])], sub: m[2] } : { name: c.nodes, sub: "" };
}

/** A plain-text value ending in "(...)" gets the bracketed part as a small note line. */
function valueNodes(c) {
  const { name, sub } = splitName(c);
  return sub ? [...name, el("span", { className: ["value-note"] }, [txt(sub)])] : c.nodes;
}

const colIndex = (head, label) => (label ? head.findIndex((h) => norm(h.text) === norm(label)) : -1);

// ---------------------------------------------------------------- layer 1 --

function enhance(table, { forceKind } = {}) {
  const { head, rows } = readTable(table);
  const cols = head.length;
  const valueCells = rows.flatMap((r) => r.slice(1));
  const moneyShare = valueCells.length ? valueCells.filter((c) => isMoney(c.text)).length / valueCells.length : 0;
  const hasTotal = rows.some((r) => isTotalLabel(r[0]?.text ?? ""));
  const kind = forceKind ?? (cols === 2 && (hasTotal || moneyShare >= 0.5) ? "breakdown" : "grid");

  visit(table, "element", (node) => {
    if (node.tagName === "thead") return SKIP;
    if (node.tagName !== "tr" || node.properties?.className?.includes("detail-row")) return;
    const cells = node.children.filter((c) => c.type === "element");
    cells.forEach((c, i) => {
      if (i === 0) {
        c.tagName = "th";
        c.properties.scope = "row";
      }
      if (head[i]?.text) c.properties.dataLabel = head[i].text;
    });
    if (isTotalLabel(text(cells[0]))) node.properties.className = ["is-total"];
    return SKIP;
  });
  if (!head[0]?.text) table.properties.className = ["has-row-labels"];

  return el("div", { className: ["table-wrap"], dataKind: kind, dataCols: String(cols) }, [table]);
}

// ---------------------------------------------------------------- layer 2 --

function noteNode(note) {
  return note ? [el("p", { className: ["table-note"] }, [txt(note)])] : [];
}

/** One card per row. feature = the headline column, badge = a chip, detail = small print at the bottom. */
function cards(table, opts) {
  const { head, rows } = readTable(table);
  const guessFeature = head.findLastIndex((h, i) => i > 0 && /fee|price|cost|total/i.test(h.text));
  const feature = opts.feature ? colIndex(head, opts.feature) : guessFeature;
  const badge = colIndex(head, opts.badge);
  const detail = opts.detail
    ? colIndex(head, opts.detail)
    : head.findIndex((_, i) => i > 0 && rows.every((r) => (r[i]?.text.length ?? 0) > 45 || (r[i]?.text.split(",").length ?? 0) >= 5));

  const list = rows.map((r) => {
    const { name, sub } = splitName(r[0]);
    const highlight = opts.highlight && norm(r[0].text).startsWith(norm(opts.highlight));
    // Always six slots in the same order, so a CSS subgrid can line the same
    // field up across every card in a row.
    const slot = (cls, children = []) => el("div", { className: [cls] }, children);
    const fields = [];
    head.forEach((h, i) => {
      if (i === 0 || i === feature || i === badge || i === detail || !r[i]?.text) return;
      fields.push(el("dt", {}, [txt(h.text)]), el("dd", {}, valueNodes(r[i])));
    });
    const kids = [
      el("p", { className: ["table-card-title"] }, name),
      el("p", { className: ["table-card-sub"] }, sub ? [txt(sub)] : []),
      slot("table-card-badge-slot", badge > 0 && r[badge]?.text ? [el("p", { className: ["table-card-badge"] }, r[badge].nodes)] : []),
      slot(
        "table-card-feature",
        feature > 0 && r[feature]
          ? [el("p", { className: ["table-card-label"] }, [txt(head[feature].text)]), el("p", { className: ["table-card-value"] }, valueNodes(r[feature]))]
          : [],
      ),
      fields.length ? el("dl", { className: ["table-card-fields"] }, fields) : slot("table-card-fields"),
      slot(
        "table-card-detail",
        detail > 0 && r[detail]?.text ? [el("p", { className: ["table-card-label"] }, [txt(head[detail].text)]), el("p", {}, r[detail].nodes)] : [],
      ),
    ];
    return el("li", { className: ["table-card", highlight ? "is-highlight" : ""].filter(Boolean) }, kids);
  });
  return el("div", { className: ["table-block", "not-prose"], dataVariant: "cards" }, [
    el("ul", { className: ["table-cards"], dataCount: String(rows.length) }, list),
    ...noteNode(opts.note),
  ]);
}

/** Options become columns, attributes become rows. Falls back to cards on narrow screens. */
function matrix(table, opts) {
  const { head, rows } = readTable(table);
  const corner = el("th", { scope: "col" }, [txt(opts.corner ?? "")]);
  const optionHeads = rows.map((r) => {
    const { name, sub } = splitName(r[0]);
    const highlight = opts.highlight && norm(r[0].text).startsWith(norm(opts.highlight));
    return el("th", { scope: "col", className: highlight ? ["is-highlight"] : [] }, [
      el("span", { className: ["matrix-name"] }, name),
      ...(sub ? [el("span", { className: ["matrix-sub"] }, [txt(sub)])] : []),
    ]);
  });
  const guess = head.findLastIndex((h, i) => i > 0 && /fee|price|cost|total/i.test(h.text));
  const feature = opts.feature ? colIndex(head, opts.feature) : guess;
  const order = head.map((_, i) => i).filter((i) => i > 0);
  if (feature > 0) order.sort((a, b) => (b === feature) - (a === feature));
  const body = order.map((i) =>
    el("tr", { className: i === feature ? ["is-feature"] : [] }, [
      el("th", { scope: "row" }, [txt(head[i].text)]),
      ...rows.map((r) => el("td", {}, r[i] ? valueNodes(r[i]) : [])),
    ]),
  );
  const matrixTable = el("table", { className: ["table-matrix"] }, [el("thead", {}, [el("tr", {}, [corner, ...optionHeads])]), el("tbody", {}, body)]);
  const fallback = cards(structuredClone(table), { ...opts, note: undefined });
  fallback.properties.className.push("matrix-fallback");
  return el("div", { className: ["table-block", "not-prose"], dataVariant: "matrix" }, [
    el("div", { className: ["matrix-wide"] }, [matrixTable]),
    fallback,
    ...noteNode(opts.note),
  ]);
}

/** A normal striped table, with one long column moved to a full-width line under each row. */
function roomyRows(table, opts) {
  const { head } = readTable(table);
  const detail = colIndex(head, opts.detail);
  if (detail > 0) {
    const span = String(head.length - 1);
    visit(table, "element", (node) => {
      if (node.tagName !== "tr") return;
      const cells = node.children.filter((c) => c.type === "element");
      const moved = cells[detail];
      node.children = cells.filter((_, i) => i !== detail);
      if (moved && moved.tagName === "td" && text(moved).trim()) {
        node.properties.className = ["has-detail"];
        node.detailRow = el("tr", { className: ["detail-row"] }, [
          el("td", { colSpan: span, dataLabel: head[detail].text }, [
            el("span", { className: ["detail-label"] }, [txt(`${head[detail].text}: `)]),
            ...moved.children,
          ]),
        ]);
      }
      return SKIP;
    });
    visit(table, "element", (node) => {
      if (node.tagName !== "tbody") return;
      node.children = node.children.flatMap((tr) => (tr.detailRow ? [tr, tr.detailRow] : [tr]));
      return SKIP;
    });
  }
  const wrap = enhance(table, { forceKind: "rows" });
  wrap.children.push(...noteNode(opts.note));
  return wrap;
}

function attrs(node) {
  const out = {};
  for (const a of node.attributes ?? []) if (a.type === "mdxJsxAttribute" && typeof a.value === "string") out[a.name] = a.value;
  return out;
}

export default function rehypeTables() {
  return (tree) => {
    // Layer 2 first: <Table variant="..."> wrappers (MDX only).
    visit(tree, (node, index, parent) => {
      if (node.type !== "mdxJsxFlowElement" || node.name !== "Table" || !parent) return;
      const opts = attrs(node);
      let table;
      visit(node, "element", (n) => {
        if (n.tagName === "table" && !table) table = n;
      });
      if (!table) return;
      const variant = opts.variant ?? "table";
      let out;
      if (variant === "cards") out = cards(table, opts);
      else if (variant === "matrix") out = matrix(table, opts);
      else if (variant === "rows") out = roomyRows(table, opts);
      else {
        out = enhance(table, { forceKind: variant === "breakdown" ? "breakdown" : variant === "table" ? "grid" : undefined });
        out.children.push(...noteNode(opts.note));
      }
      out.properties.dataDone = "";
      parent.children[index] = out;
      return SKIP;
    });
    // Layer 1: every other table. A wide table full of sentences (five or
    // more columns, long cells) can't be read as a grid in a text column, so
    // it becomes cards; everything else gets the enhanced table.
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "div" && node.properties?.dataDone !== undefined) return SKIP;
      if (node.tagName !== "table" || !parent || node.properties?.className?.includes("table-matrix")) return;
      const { head, rows } = readTable(node);
      const cells = rows.flatMap((r) => r.slice(1));
      const avg = cells.length ? cells.reduce((n, c) => n + c.text.length, 0) / cells.length : 0;
      parent.children[index] = head.length >= 5 && avg > 18 ? cards(node, { detail: "-" }) : enhance(node);
      return SKIP;
    });
  };
}
