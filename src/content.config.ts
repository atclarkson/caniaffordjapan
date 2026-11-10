// src/content.config.ts - les trois collections de Reef (posts, authors, topics), chargees par glob depuis src/data.
//
// Le contenu est range par langue : src/data/posts/en/... et src/data/posts/fr/...
// Le loader glob fabrique donc des id prefixes ("en/mon-article"), ce qui donne
// deux garanties gratuitement : filtrer une langue est un simple prefixe, et
// deux versions d'un meme article portent le meme slug une fois le prefixe
// retire, ce qui permet au selecteur de langue de pointer vers la traduction
// exacte de l'article qu'on lit. Les helpers vivent dans src/i18n/content.ts.
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

// Les articles. Du Markdown ou du MDX dans src/data/posts/<langue>/.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Renseignee uniquement si l'article a ete revu apres publication : le
      // template affiche alors les deux dates, ce qui est plus honnete que de
      // remplacer silencieusement la premiere.
      updatedDate: z.coerce.date().optional(),
      author: reference("authors"),
      // Un sujet, pas une categorie fourre-tout. La reference est validee au
      // build : un sujet mal orthographie casse la construction au lieu de
      // produire une page d'archive vide en production.
      topic: reference("topics"),
      tags: z.array(z.string()).default([]),
      // image() donne a Astro de quoi optimiser et connaitre les dimensions,
      // ce qui evite le decalage de mise en page au chargement.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Un seul article a la une par langue. Le garde-fou est dans la page
      // d'accueil, pas ici : le schema ne peut pas compter les autres fichiers.
      featured: z.boolean().default(false),
      // Un brouillon reste constructible en local mais sort des listes, du RSS,
      // du sitemap et du llms.txt, et part en noindex.
      draft: z.boolean().default(false),
      // FAQPage JSON-LD (src/js/schema.ts), seulement quand l'article contient
      // reellement une section de questions-reponses visible : le schema ne
      // doit jamais decrire un contenu que la page ne montre pas.
      faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
      // Credits for photos the family didn't take (Wikimedia Commons, CC BY
      // and CC BY-SA). Rendered as one small line at the end of the post
      // (PhotoCredits.astro), never as a caption under the photo: the
      // licences allow attribution "in any reasonable manner". Each entry is
      // the bare minimum they require: author, licence, link to the source.
      photoCredits: z
        .array(
          z.object({ author: z.string(), license: z.string(), source: z.url(), note: z.string().optional() }),
        )
        .optional(),
    }),
});

// Les auteurs : un JSON par personne, reference par les articles.
const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      links: z
        .array(z.object({ label: z.string(), href: z.url() }))
        .default([]),
    }),
});

// Les sujets. Chacun a sa page d'archive, sa couleur d'accent et sa propre
// description : une archive sans texte est une page qui ne se referencera
// jamais, et un blog serieux merite mieux que douze listes nues.
const topics = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/topics" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // The <title> for the topic page in search results, phrased the way
    // people search ("Tokyo Prices: What Things Cost"). Falls back to the
    // generic "Posts filed under X" when absent.
    seoTitle: z.string().optional(),
    // Un nom semantique que les composants traduisent en tokens, jamais une
    // couleur en dur : rebrander ne doit pas obliger a rouvrir le contenu.
    accent: z.enum(["coral", "reef", "ink"]),
    // Ordre d'affichage dans la navigation des sujets. Egalites triees par nom.
    order: z.number().default(0),
  }),
});

export const collections = { posts, authors, topics };
