// Unit 4 - "Going shopping" - Hello World, Classe 5
// Topic normalizzati (3): Shops, Containers, Money — solo lingua inglese
// Pool domande generato da inventario PDF Unit 4 (pp.74-95).

const TOPICS = {
  shops: {
    title: "Shops and items",
    emoji: "🏪",
    color: "#7c3aed",
    items: [
      { en: "shoe shop", it: "negozio di scarpe", emoji: "👟" },
      { en: "chemist's", it: "farmacia", emoji: "💊" },
      { en: "toy shop", it: "negozio di giocattoli", emoji: "🧸" },
      { en: "greengrocer's", it: "fruttivendolo", emoji: "🥬" },
      { en: "newsagent's", it: "edicola", emoji: "📰" },
      { en: "stationer's", it: "cartoleria", emoji: "✏️" },
      { en: "baker's", it: "panetteria", emoji: "🥖" },
      { en: "clothes shop", it: "negozio di vestiti", emoji: "👕" },
      { en: "electronics store", it: "negozio di elettronica", emoji: "💻" },
      { en: "supermarket", it: "supermercato", emoji: "🛒" },
      { en: "medicine", it: "medicina", emoji: "💉" },
      { en: "bread", it: "pane", emoji: "🍞" },
      { en: "magazine", it: "rivista", emoji: "📖" },
      { en: "skirt", it: "gonna", emoji: "👗" }
    ]
  },
  containers: {
    title: "Food containers",
    emoji: "📦",
    color: "#0ea5e9",
    items: [
      { en: "a packet of", it: "un pacchetto di", emoji: "📦" },
      { en: "a bag of", it: "un sacchetto di", emoji: "🛍️" },
      { en: "a tin of", it: "una scatoletta di", emoji: "🥫" },
      { en: "a box of", it: "una vaschetta di", emoji: "📦" },
      { en: "a bottle of", it: "una bottiglia di", emoji: "🍾" },
      { en: "a can of", it: "una lattina di", emoji: "🥤" },
      { en: "a jar of", it: "un vasetto di", emoji: "🍯" },
      { en: "a carton of", it: "un cartone di", emoji: "🥛" },
      { en: "a kilo of", it: "un chilo di", emoji: "⚖️" },
      { en: "pasta", it: "pasta", emoji: "🍝" },
      { en: "flour", it: "farina", emoji: "🌾" },
      { en: "tuna", it: "tonno", emoji: "🐟" },
      { en: "strawberries", it: "fragole", emoji: "🍓" },
      { en: "tomatoes", it: "pomodori", emoji: "🍅" }
    ]
  },
  money: {
    title: "Money and prices",
    emoji: "💰",
    color: "#f59e0b",
    items: [
      { en: "money", it: "denaro/soldi", emoji: "💵" },
      { en: "coin", it: "moneta", emoji: "🪙" },
      { en: "banknote", it: "banconota", emoji: "💴" },
      { en: "price", it: "prezzo", emoji: "🏷️" },
      { en: "pound", it: "sterlina", emoji: "💷" },
      { en: "penny / pence", it: "penny (centesimo di sterlina)", emoji: "🪙" },
      { en: "euro", it: "euro", emoji: "💶" },
      { en: "cent", it: "centesimo", emoji: "🪙" },
      { en: "cash", it: "contanti", emoji: "💵" },
      { en: "credit card", it: "carta di credito", emoji: "💳" },
      { en: "How much is it?", it: "Quanto costa? (singolare)", emoji: "❓" },
      { en: "How much are they?", it: "Quanto costano? (plurale)", emoji: "❓" },
      { en: "Anything else?", it: "Qualcos'altro?", emoji: "🛒" },
      { en: "Can I have...?", it: "Posso avere...?", emoji: "🙏" }
    ]
  }
};

// I 3 topic ufficiali per tracking/adaptive/report
const TOPIC_KEYS = ["Shops", "Containers", "Money"];
const TOPIC_META = {
  "Shops":      { emoji: "🏪", color: "#7c3aed" },
  "Containers": { emoji: "📦", color: "#0ea5e9" },
  "Money":      { emoji: "💰", color: "#f59e0b" }
};

// QUIZ: 20 items a scelta multipla (4 opzioni, 1 corretta). 100% basato su PDF Unit 4.
const QUIZ = [
  // ===== SHOPS (7) =====
  { q: "Come si dice 'farmacia' in inglese? (p.78)", options: ["baker's", "chemist's", "stationer's", "newsagent's"], correct: 1, tag: "Shops" },
  { q: "Cosa significa 'greengrocer's'? (p.78)", options: ["panetteria", "fruttivendolo", "edicola", "cartoleria"], correct: 1, tag: "Shops" },
  { q: "Read p.78: 'Where can I buy medicine?' — Quale risposta corretta? (p.78)", options: ["At the toy shop.", "At the chemist's.", "At the baker's.", "At the shoe shop."], correct: 1, tag: "Shops" },
  { q: "Come si dice 'edicola' in inglese? (p.78)", options: ["stationer's", "newsagent's", "greengrocer's", "clothes shop"], correct: 1, tag: "Shops" },
  { q: "Cosa significa 'stationer's'? (p.78)", options: ["cartoleria", "farmacia", "panetteria", "negozio di scarpe"], correct: 0, tag: "Shops" },
  { q: "Read p.78: 'Where can I buy Lego bricks?' — Risposta corretta? (p.78)", options: ["At the baker's.", "At the chemist's.", "At the toy shop.", "At the greengrocer's."], correct: 2, tag: "Shops" },
  { q: "Come si dice 'panetteria' in inglese? (p.78)", options: ["baker's", "shoe shop", "toy shop", "newsagent's"], correct: 0, tag: "Shops" },

  // ===== CONTAINERS (7) =====
  { q: "Come si dice 'un pacchetto di pasta' in inglese? (p.74)", options: ["a bag of pasta", "a packet of pasta", "a tin of pasta", "a jar of pasta"], correct: 1, tag: "Containers" },
  { q: "Cosa significa 'a bottle of oil'? (p.74)", options: ["un sacchetto d'olio", "un cartone d'olio", "una bottiglia d'olio", "un vasetto d'olio"], correct: 2, tag: "Containers" },
  { q: "Come si dice 'una scatoletta di tonno'? (p.74)", options: ["a jar of tuna", "a bag of tuna", "a tin of tuna", "a box of tuna"], correct: 2, tag: "Containers" },
  { q: "What does 'a carton of milk' mean? (p.75)", options: ["un cartone di latte", "una bottiglia di latte", "un sacchetto di latte", "una lattina di latte"], correct: 0, tag: "Containers" },
  { q: "Cosa significa 'a jar of chocolate spread'? (p.75)", options: ["un pacchetto di crema al cioccolato", "una bottiglia di crema al cioccolato", "un vasetto di crema al cioccolato", "una scatoletta di crema al cioccolato"], correct: 2, tag: "Containers" },
  { q: "Come si dice 'una lattina di Coca-Cola'? (p.74)", options: ["a bottle of Coke", "a can of Coke", "a jar of Coke", "a tin of Coke"], correct: 1, tag: "Containers" },
  { q: "Cosa significa 'a kilo of tomatoes'? (p.75)", options: ["un litro di pomodori", "un sacchetto di pomodori", "un chilo di pomodori", "un cartone di pomodori"], correct: 2, tag: "Containers" },

  // ===== MONEY (6) =====
  { q: "Quale è la domanda corretta per chiedere il prezzo di UN solo oggetto? (p.80)", options: ["How much are they?", "How much is it?", "How many is it?", "How much they are?"], correct: 1, tag: "Money" },
  { q: "Quale è la domanda corretta per chiedere il prezzo di PIÙ oggetti? (p.80)", options: ["How much is it?", "How much are they?", "How many is they?", "How much is they?"], correct: 1, tag: "Money" },
  { q: "Completa: 'Can I ___ a Coke, please?' (p.83)", options: ["have", "has", "having", "had"], correct: 0, tag: "Money" },
  { q: "Cosa significa 'pocket money'? (p.82)", options: ["resto", "paghetta", "sconto", "contanti"], correct: 1, tag: "Money" },
  { q: "Come si dice 'risparmiare' in inglese? (p.82)", options: ["earn", "waste", "save", "spend"], correct: 2, tag: "Money" },
  { q: "Cosa significa 'Anything else?' detto dal commesso? (p.81)", options: ["Grazie!", "Qualcos'altro?", "Quanto costa?", "Ecco a te."], correct: 1, tag: "Money" }
];

// FILL_GAP: 18 frasi del libro con buco. 100% basato su PDF Unit 4.
const FILL_GAP = [
  // ===== SHOPS (6) =====
  { sentence: "Where can I buy medicine? At the ___ . (p.78)", choices: ["chemist's", "baker's", "toy shop"], correct: 0, topic: "Shops" },
  { sentence: "Where can I buy a magazine? At the ___ . (p.78)", choices: ["greengrocer's", "newsagent's", "shoe shop"], correct: 1, topic: "Shops" },
  { sentence: "Where can I buy shoes? At the ___ . (p.78)", choices: ["shoe shop", "stationer's", "baker's"], correct: 0, topic: "Shops" },
  { sentence: "Where can I buy bread? At the ___ . (p.78)", choices: ["clothes shop", "baker's", "toy shop"], correct: 1, topic: "Shops" },
  { sentence: "Where can I buy a box of coloured pencils? At the ___ . (p.78)", choices: ["stationer's", "chemist's", "greengrocer's"], correct: 0, topic: "Shops" },
  { sentence: "Where can I buy a kilo of potatoes? At the ___ . (p.78)", choices: ["toy shop", "greengrocer's", "newsagent's"], correct: 1, topic: "Shops" },

  // ===== CONTAINERS (6) =====
  { sentence: "Read p.74: 'a packet of ___'.", choices: ["pasta", "milk", "oil"], correct: 0, topic: "Containers" },
  { sentence: "Read p.74: 'a bottle of ___'.", choices: ["tuna", "oil", "pasta"], correct: 1, topic: "Containers" },
  { sentence: "Read p.74: 'a tin of ___'.", choices: ["tuna", "milk", "flour"], correct: 0, topic: "Containers" },
  { sentence: "Read p.75: 'a carton of ___'.", choices: ["flour", "milk", "tomatoes"], correct: 1, topic: "Containers" },
  { sentence: "Read p.74: 'a bag of ___'.", choices: ["flour", "oil", "tuna"], correct: 0, topic: "Containers" },
  { sentence: "Read p.75: 'a kilo of ___'.", choices: ["Coke", "tomatoes", "milk"], correct: 1, topic: "Containers" },

  // ===== MONEY (6) =====
  { sentence: "Read p.81: 'How much ___ the apples?' (più mele)", choices: ["is", "are", "am"], correct: 1, topic: "Money" },
  { sentence: "Read p.81: 'How much ___ it?' (un oggetto)", choices: ["is", "are", "do"], correct: 0, topic: "Money" },
  { sentence: "Read p.83: 'Can I ___ a kilo of potatoes, please?'", choices: ["buy", "have", "having"], correct: 1, topic: "Money" },
  { sentence: "Read p.88: 'Excuse ___, how much is the mug?'", choices: ["me", "you", "my"], correct: 0, topic: "Money" },
  { sentence: "Read p.93: 'How much is it ___?' (=in totale)", choices: ["altogether", "anything", "else"], correct: 0, topic: "Money" },
  { sentence: "Read p.88: 'Here you are. ___ else?'", choices: ["Anything", "Something", "Nothing"], correct: 0, topic: "Money" }
];

// TRUE_FALSE: 15 affermazioni vero/falso. Zero hint nelle parentesi (solo p.XX).
const TRUE_FALSE = [
  // ===== SHOPS (5) =====
  { s: "'chemist's' significa 'farmacia'. (p.78)", correct: true, tag: "Shops" },
  { s: "'baker's' significa 'fruttivendolo'. (p.78)", correct: false, tag: "Shops" },
  { s: "'toy shop' significa 'negozio di giocattoli'. (p.78)", correct: true, tag: "Shops" },
  { s: "'newsagent's' significa 'farmacia'. (p.78)", correct: false, tag: "Shops" },
  { s: "'stationer's' significa 'cartoleria'. (p.78)", correct: true, tag: "Shops" },

  // ===== CONTAINERS (5) =====
  { s: "'a packet of pasta' si traduce 'un pacchetto di pasta'. (p.74)", correct: true, tag: "Containers" },
  { s: "'a jar' significa 'un cartone'. (p.75)", correct: false, tag: "Containers" },
  { s: "'a tin' significa 'una scatoletta'. (p.74)", correct: true, tag: "Containers" },
  { s: "'a bag' significa 'una bottiglia'. (p.74)", correct: false, tag: "Containers" },
  { s: "'a carton' significa 'un cartone'. (p.75)", correct: true, tag: "Containers" },

  // ===== MONEY (5) =====
  { s: "'How much is it?' si usa per un solo oggetto. (p.80)", correct: true, tag: "Money" },
  { s: "'How much are they?' si usa per un solo oggetto. (p.80)", correct: false, tag: "Money" },
  { s: "'pocket money' significa 'paghetta'. (p.82)", correct: true, tag: "Money" },
  { s: "'to waste money' significa 'risparmiare'. (p.82)", correct: false, tag: "Money" },
  { s: "'Anything else?' significa 'Qualcos'altro?'. (p.81)", correct: true, tag: "Money" }
];

// SEQUENCE: 7 items da riordinare. items[] è l'ordine corretto, la UI mescola.
const SEQUENCE = [
  // ===== SHOPS (2) =====
  {
    prompt: "Metti in ordine il mini-dialogo p.78:",
    items: ["Where can I buy Lego bricks?", "At the toy shop.", "Thank you!"],
    tag: "Shops"
  },
  {
    prompt: "Metti in ordine il mini-dialogo p.78:",
    items: ["What can I buy at the chemist's?", "You can buy medicine.", "Thanks!"],
    tag: "Shops"
  },

  // ===== CONTAINERS (2) =====
  {
    prompt: "Metti in ordine il dialogo della spesa (p.75):",
    items: ["How many packets of pasta?", "Two packets.", "OK. What else?", "One box of strawberries."],
    tag: "Containers"
  },
  {
    prompt: "Metti in ordine la richiesta al banco (p.83):",
    items: ["Can I have a kilo of potatoes, please?", "I'm sorry, I haven't got potatoes today."],
    tag: "Containers"
  },

  // ===== MONEY (3) =====
  {
    prompt: "Metti in ordine il dialogo del prezzo (p.93):",
    items: ["Excuse me, how much is a packet of pasta?", "It's £2.", "Can I have two packets, please?", "Here you are. Anything else?"],
    tag: "Money"
  },
  {
    prompt: "Metti in ordine il dialogo del food truck (p.81):",
    items: ["Hello! What would you like?", "Can I have a jacket potato, please?", "It's £2.60. Anything else?", "Thank you!"],
    tag: "Money"
  },
  {
    prompt: "Metti in ordine il dialogo del souvenir shop (p.88):",
    items: ["Excuse me, how much is the mug?", "It's £4.95.", "And how much is a magnet?", "How much is it altogether?"],
    tag: "Money"
  }
];

// MATCHING: pool da cui peschiamo 6 coppie random
const MATCHING_POOL = [
  ...TOPICS.shops.items.slice(0, 10),
  ...TOPICS.containers.items.slice(0, 10),
  ...TOPICS.money.items.slice(0, 10)
];

const FUN_FACTS = [
  "'How much is it?' si usa per UN solo oggetto. 'How much are they?' per più oggetti! ❓",
  "'Can I have a Coke, please?' è il modo gentile per ordinare al ristorante. 🙏",
  "'Anything else?' significa 'Qualcos'altro?' — lo dice il commesso quando hai finito di ordinare. 🛒",
  "Container + 'of' + cibo: 'a packet of pasta', 'a bottle of water', 'a kilo of apples'. 📦",
  "'Chemist's' significa farmacia (non chimico)! È un false friend. 💊",
  "'Newsagent's' è l'edicola dove compri giornali e riviste. 📰",
  "'Stationer's' è la cartoleria (penne, quaderni, matite). ✏️",
  "Per chiedere dove comprare qualcosa: 'Where can I buy ___?' 🛍️"
];
