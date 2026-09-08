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
      "Honest, photo-backed posts on what things really cost in Japan: temples, food, transit, and day trips, from the Clarkson family's own trips. No stock photos, no guessing.",
    eyebrow: "Can I Afford Japan?",
    heroTitle: "Can we actually afford this trip?",
    heroAccent: "afford",
    heroLede:
      "A real, running answer, written from our own trips to Japan. Real photos, real prices, no guessing.",
    heroPrimary: "Start reading",
    heroSecondary: "About us",
    heroRecent: "Latest posts",
    // Les trois libelles du compteur du hero, dans l'ordre exact ou la page
    // fournit les nombres : billets publies, sujets, membres de la famille.
    heroLedger: ["posts published", "topics", "family members"],
    featuredEyebrow: "Pick of the month",
    latestTitle: "Latest posts",
    latestAccent: "Latest",
    latestLede: "The most recent entries, newest first. Everything older waits in the archive.",
    latestCta: "Browse all posts",
    topicsTitle: "What we keep coming back to",
    topicsAccent: "coming back",
    topicsLede:
      "Every post belongs to exactly one topic, so you can read a whole thread (Tokyo, budget food, day trips) without wading through the rest.",
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
      "This site is the real prices from those trips. What a temple actually costs (nothing). What dinner actually costs. What a discount code actually gets you. No guessing.",
    ],
    stats: [
      { value: "33+", label: "countries visited" },
      { value: "2022", label: "full-time since" },
      { value: "5", label: "in the family" },
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
    contactTitle: "Get in touch",
    contactLede: "A question about a post, a correction, or something we should cover? Tell us what's on your mind.",
    contactCta: "Get in touch",
  },

  // --- Contact -------------------------------------------------------------
  // Le formulaire est complet et non monte : le theme ne choisit pas de
  // prestataire d'envoi a la place de son utilisateur. La copie, elle, est prete.
  contact: {
    metaTitle: "Contact",
    metaDescription:
      "A question about a post, a correction, or something we should cover. One inbox, read by a person, answered within a few days.",
    eyebrow: "Contact",
    title: "Write to us, we read all of it",
    accent: "all",
    lede:
      "A correction, a question about a price, a place we should cover next: it lands in the same inbox and a person answers it. No ticket number, no autoresponder.",
    formTitle: "Send a message",
    nameLabel: "Your name",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "One line is enough",
    messageLabel: "Message",
    messagePlaceholder: "What's the question, or what did we get wrong?",
    submit: "Send message",
    formNote: "No newsletter signup hidden in this form. Your address is used to reply, and for nothing else.",
    success: "Message sent. You will hear back within a few days.",
    error: "That did not go through. Email us directly and we will pick it up there.",
    directTitle: "Or skip the form",
    directLede: "Plain email works just as well, and a thread is easier to keep than a form.",
    directCta: "Email us",
    nextTitle: "What happens next",
    nextSteps: [
      "A short reply within a few days, written by one of us.",
      "If it's a correction, the post is fixed and the date updated the same week.",
      "If it's a place we haven't covered, it goes on the list for a future trip.",
    ],
  },

  // --- Sujets --------------------------------------------------------------
  topics: {
    metaTitle: "Topics",
    metaDescription:
      "Every subject covered on Can I Afford Japan?: cities, budget food, free attractions, transit, and day trips.",
    eyebrow: "Topics",
    title: "What we keep coming back to",
    accent: "coming back",
    lede:
      "Every post belongs to exactly one topic. Pick a thread and read it end to end, oldest first if you want the trips in order.",
    /** {count} vient du nombre d'articles publies dans le sujet. */
    countLabel: "{count} posts",
    countOne: "1 post",
    readTopic: "Read this topic",
    allTopics: "All topics",
    emptyTitle: "Nothing filed here yet",
    emptyLede: "The topic is open and the first post is still on the way. The RSS feed will say when it lands.",
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
    postsBy: "Posts by {name}",
    readAll: "Read everything by {name}",
    countLabel: "{count} posts",
    countOne: "1 post",
    emptyTitle: "No posts under this byline yet",
    emptyLede: "An author page with nothing on it means a first draft is open somewhere. It happens.",
  },

  // --- Recherche -----------------------------------------------------------
  // La recherche tourne dans le navigateur sur un index construit au build :
  // zero requete, zero service tiers, et le theme reste 100% statique.
  search: {
    metaTitle: "Search",
    metaDescription:
      "Search every post on Can I Afford Japan? by title, summary, topic or tag. It runs in your browser: nothing is sent to a server and nothing is logged.",
    eyebrow: "Search",
    title: "Find it again",
    accent: "again",
    lede:
      "Search covers titles, summaries, topics and tags. It runs in your browser, so nothing leaves the page and it keeps working offline once loaded.",
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

  // --- Mentions legales ----------------------------------------------------
  // La page /legal/ porte SON propre texte ici, parce qu'elle n'en a pas
  // ailleurs : src/config/legalData.json.ts ne couvre que la confidentialite et
  // les conditions. Ce texte reste generique pour un blog personnel et ne
  // vaut pas un avis juridique: a faire relire si le site se monetise serieusement.
  legal: {
    eyebrow: "Legal",
    title: "Legal notice",
    description: "Who publishes this site, who hosts it, and how to reach us.",
    /** {date} est formatee par formatDate() dans la langue de la page. */
    lastUpdated: "Last updated on {date}",
    toc: "On this page",
    backToTop: "Back to top",
    sections: [
      {
        title: "Publisher",
        body: "This site is published by Adam and Lindsay Clarkson as a personal family blog. Any question about the content published here can be sent through the contact page.",
      },
      {
        title: "Hosting",
        body: "The site is a set of static files served by Cloudflare. There is no database, no server-side session and no account: nothing is stored on our side when you read a page.",
      },
      {
        title: "Content and reuse",
        body: "The posts, photos and code samples published here belong to their authors. Quoting a passage with a link back is welcome and needs no permission. Republishing a whole post, or using our photos elsewhere, does.",
      },
      {
        title: "Reporting a problem",
        body: "A factual error, an outdated price, a broken link: write to the address on the contact page. Corrections are made promptly and the post carries the date of its revision.",
      },
      {
        title: "Affiliate disclosure",
        body: "This site participates in affiliate programs with Klook, GetYourGuide, and Expedia. Booking links and widgets from those partners on this blog are affiliate links, and we may earn a small commission if you book through them, at no extra cost to you. We only ever link to places, tours, or hotels we'd genuinely recommend based on our own trips; the affiliate relationship never decides what we cover.",
      },
    ],
  },
} as const;
