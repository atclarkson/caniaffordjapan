// src/i18n/ui/en/pages.ts - dictionnaire anglais, tranche "pages" : la copie propre a chaque page du site.
//
// Une page est un assemblage de sections, jamais un endroit ou l'on ecrit des
// phrases : les titres de hero, les descriptions meta et les libelles de
// formulaire vivent ici, et les composants n'affichent que ce qu'on leur passe.
//
// Can I Afford Japan? est le blog de voyage honnete de la famille Clarkson :
// des billets photo a l'appui sur ce que coute vraiment un voyage au Japon.
// Le registre est celui d'une famille qui montre ses recus, pas celui d'une
// page commerciale. Concret, chiffre quand c'est possible.

export const enPages = {
  // --- Accueil -------------------------------------------------------------
  home: {
    metaTitle: "Can I Afford Japan? - real prices for an affordable Japan trip",
    metaDescription:
      "Honest, well-researched posts on what things really cost in Japan: temples, food, transit, hotels, activities, and day trips, from the Clarkson family's own trips and real research in between. Real pricing, never invented.",
    eyebrow: "Can I Afford Japan?",
    heroTitle: "Real Japan prices from a family of five",
    heroAccent: "",
    heroLede:
      "{n} posts on hotels, food, trains, theme parks, and day trips, priced from our own trips and current booking sites.",
    heroSearchLabel: "Search {n} posts",
    heroSearchPlaceholder: "Try Disney, ramen, trains",
    heroSearchButton: "Search",
    heroPopularLabel: "Top topics",
    heroAllPosts: "All posts",
    heroPrimary: "Start reading",
    heroSecondary: "About us",
    heroRecent: "Latest posts",
    featuredEyebrow: "Before you book",
    latestTitle: "Latest from our trips",
    latestAccent: "",
    latestLede: "",
    latestCta: "See all posts",
    topicsTitle: "What we keep coming back to",
    topicsAccent: "coming back",
    topicsLede: "Tokyo, budget food, free attractions, transit, and day trips.",
    topicsCta: "See all topics",
    authorsTitle: "Who writes here",
    authorsAccent: "writes",
    authorsLede: "One family, five people, more trips to Japan than we can count.",
    authorsCta: "Meet the family",
    aboutTitle: "About the family",
    aboutAccent: "family",
    aboutLede:
      "Adam, Lindsay, and their three kids, Lily, Cora, and Harper. We travel to Japan a lot, and we're always looking for ways to save money on it.",
    aboutCta: "About us",
  },

  // --- A propos ------------------------------------------------------------
  about: {
    metaTitle: "About us",
    metaDescription:
      "Adam, Lindsay, and their three girls have been full-time travelers since 2022, and Japan is the country they keep coming back to.",
    eyebrow: "About",
    title: "We keep coming back to Japan",
    accent: "Japan",
    lede:
      "Adam, Lindsay, and their three girls, Lily, Cora, and Harper. Full-time travelers since 2022, and Japan is the one place they never seem to leave for long.",
    storyTitle: "The short version",
    storyAccent: "short",
    storyParagraphs: [
      "In May 2022, Adam and Lindsay sold their house in Indiana, packed five bags, and left with three kids aged 6, 5, and 2. It was supposed to be a one year trip. Four years and more than 33 countries later, they're still going, worldschooling the girls along the way.",
      "Japan wasn't the first stop, but it's the one that stuck. After a first trip in 2022 and a longer one in 2023, they kept coming back: months at a time in Osaka and Fukuoka, repeat trips to Tokyo, enough visits that Japan is now Cora and Harper's favorite country in the world.",
      "This site is the real prices from those trips. What a temple costs (nothing). What dinner costs. What a discount code gets you. No guessing.",
    ],
    stats: [
      { value: "33+", label: "Countries visited" },
      { value: "2022", label: "Traveling full time since" },
      { value: "5", label: "Of us" },
    ],
    familyTitle: "Meet the family",
    familyAccent: "family",
    familyLede: "Five people, one shared passport stamp collection.",
    family: [
      {
        name: "Adam",
        role: "Filming, editing, and the tech side",
        bio: "Background in software engineering, traded it for full-time travel in May 2022. Handles the camera and the code editor in roughly equal measure.",
        favorite: "Favorite country: Italy",
      },
      {
        name: "Lindsay",
        role: "Trip planning",
        bio: "Plans every itinerary the family runs, and now does the same for other families as a certified travel advisor.",
        favorite: "Favorite country: Japan",
      },
      {
        name: "Lily",
        role: "The eldest",
        bio: "Keeps a running rank of every country they've visited and will try anything on the menu at least once.",
        favorite: "Favorite country: England",
      },
      {
        name: "Cora",
        role: "The middle",
        bio: "Shy until she isn't, and once she decides you're her people, you're her people for life.",
        favorite: "Favorite country: Japan",
      },
      {
        name: "Harper",
        role: "The youngest",
        bio: "Was two years old when the family left Indiana and has never really known anything else.",
        favorite: "Favorite country: Japan",
      },
    ],
    contactTitle: "Say hello",
    contactLede: "A question about a post, a price that's changed, or a place we should cover next? We'd like to hear it.",
    contactCta: "Email us",
    followTitle: "Follow along",
  },

  // --- Contact -------------------------------------------------------------
  // Le formulaire est complet et non monte : le theme ne choisit pas de
  // prestataire d'envoi a la place de son utilisateur. La copie, elle, est prete.
  contact: {
    metaTitle: "Contact",
    metaDescription: "Email the Clarkson family about a post, a price that's changed, a correction, or a place in Japan you'd like covered.",
    eyebrow: "Contact",
    title: "Get in touch",
    accent: "touch",
    lede: "Email is the best way to reach us: a question about a post, a correction, or a place we should cover.",
    directTitle: "Email us",
    directLede: "Write to us at",
    directCta: "Email us",
    topicsTitle: "Good reasons to write",
    topics: [
      "A price in a post has changed since we wrote it.",
      "Something's wrong: a fact, a link, an opening time.",
      "A place or a question you'd like us to cover next.",
    ],
    followTitle: "Follow along",
    followLede: "Our trips, as they happen, on the Adam and Linds channels.",
  },


  // --- Sujets --------------------------------------------------------------
  topics: {
    metaTitle: "Topics",
    /** The topics index <title> in search results; metaTitle stays the breadcrumb label. */
    seoTitle: "Japan Travel Costs by Topic",
    metaDescription:
      "Every subject covered on Can I Afford Japan?: cities, budget food, free attractions, transit, and day trips.",
    eyebrow: "Topics",
    title: "What we keep coming back to",
    accent: "coming back",
    lede: "Cities, budget food, free attractions, transit, and day trips.",
    /** {count} vient du nombre d'articles publies dans le sujet. */
    countLabel: "{count} posts",
    countOne: "1 post",
    readTopic: "Read this topic",
    allTopics: "All topics",
    emptyTitle: "Nothing here yet",
    emptyLede: "",
  },

  // --- Auteurs -------------------------------------------------------------
  authors: {
    metaTitle: "Authors",
    metaDescription:
      "The people behind Can I Afford Japan?: who they are, and everything they've published here.",
    eyebrow: "Authors",
    title: "Who writes here",
    accent: "writes",
    lede: "One family writes this blog together.",
    roleLabel: "Role",
    linksLabel: "Elsewhere",
    postsBy: "{name}",
    readAll: "Read everything by {name}",
    countLabel: "{count} posts",
    countOne: "1 post",
    emptyTitle: "Nothing here yet",
    emptyLede: "",
  },

  // --- Recherche -----------------------------------------------------------
  // La recherche tourne dans le navigateur sur un index construit au build :
  // zero requete, zero service tiers, et le theme reste 100% statique.
  search: {
    metaTitle: "Search",
    metaDescription: "Search every post on Can I Afford Japan? by title, summary, topic or tag.",
    eyebrow: "Search",
    title: "Find it again",
    accent: "again",
    lede: "Search covers titles, summaries, topics, and tags.",
    placeholder: "Search posts, topics and tags",
    label: "Search the blog",
    shortcut: "Press / to search",
    clear: "Clear search",
    /** Affiche avant la premiere frappe. {count} est la taille de l'index. */
    prompt: "Start typing to search {count} posts.",
    resultsLabel: "Search results",
    countLabel: "{count} results",
    countOne: "1 result",
    inTopic: "in {topic}",
    noResultsTitle: "Nothing matches {query}",
    noResultsLede: "Try a shorter word, or take the long way round and browse by topic.",
    noResultsCta: "Browse topics",
  },

  // --- 404 -----------------------------------------------------------------
  notFound: {
    metaTitle: "Page not found",
    metaDescription: "There is nothing at this address. The archive and the search box both still work.",
    code: "404",
    title: "Nothing at this address",
    accent: "Nothing",
    lede:
      "The link is wrong, or the post moved and we failed to leave a redirect. Neither is your problem. Two ways back, below.",
    homeCta: "Back to the home page",
    postsCta: "Browse all posts",
    searchCta: "Search the blog",
  },

  // --- Privacy, terms and affiliate links ----------------------------------
  // One short page at /legal/ (merged 2026-11-10 from the old legal notice,
  // privacy policy and terms; /privacy/ and /terms/ redirect here). Plain
  // English on purpose, the site owner's brief: clean, compliant, easy to
  // understand. Keep it true to what the site really does: if a tracking
  // script, form or newsletter is ever added or removed, update this page.
  legal: {
    eyebrow: "Legal",
    title: "Privacy, terms and affiliate links",
    description:
      "Nothing to sign up for, no data sold, and some affiliate links. What that means for you, in plain English.",
    /** {date} is formatted by formatDate() in the page's language. */
    lastUpdated: "Last updated {date}",
    toc: "On this page",
    backToTop: "Back to top",
    sections: [
      {
        title: "The short version",
        body: "There's nothing to sign up for here: no accounts, no newsletter, no forms. We don't collect your name or email address unless you email us yourself, and we never sell or share anything about you.",
      },
      {
        title: "What happens when you visit",
        body: "The site is hosted by Cloudflare, which keeps standard server logs (IP address, browser, the page you asked for) to deliver pages and block abuse, like any web host. If you switch between light and dark mode, that choice is saved in your own browser and never sent to us.",
      },
      {
        title: "Affiliate links and cookies",
        body: [
          "Many posts link to places where you can book or buy things: Klook, GetYourGuide, Expedia, Hotels.com, Viator, Amazon, eSIM and SIM providers like Holafly and Airalo, travel insurers, and a few others. These are affiliate links. If you book or buy through one, we may earn a commission, at no extra cost to you. As an Amazon Associate we earn from qualifying purchases.",
          "So partners can credit us for a booking, our affiliate networks (Impact and Partnerize) run small tracking scripts on this site, and a partner may set a cookie when you click through or use a booking widget in a post. Once you're on their site, their privacy policy and terms apply, not ours.",
          "Commissions never decide what we write about or recommend.",
        ],
      },
      {
        title: "Using what you read here",
        body: "Prices, opening hours and rules in Japan change. We share everything in good faith as a starting point for your own planning, so check the current price before you book.",
      },
      {
        title: "Our posts and photos",
        body: "The posts and photos on this site belong to us. Quoting a bit with a link back is always fine. Ask us first before republishing a whole post or using our photos.",
      },
      {
        title: "Who we are and how to reach us",
        body: "Can I Afford Japan? is a family blog run by Adam and Lindsay Clarkson. For a question, a correction, or anything about your privacy, email us from the contact page.",
      },
    ],
  },
} as const;
