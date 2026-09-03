export type Personality = "Bold Adventurer" | "Sweet Enthusiast" | "Social Butterfly" | "Indulgent Treat";

export interface Answer {
  text: string;
  emoji: string;
  personality: Personality;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface CoffeeResult {
  coffee: string;
  tagline: string;
}

export const coffeeMap: Record<Personality, CoffeeResult> = {
  "Bold Adventurer": { coffee: "Double Espresso", tagline: "You live for intensity" },
  "Sweet Enthusiast": { coffee: "Caramel Latte", tagline: "Life's too short for bitter" },
  "Social Butterfly": { coffee: "Cappuccino", tagline: "Coffee is better with company" },
  "Indulgent Treat": { coffee: "Mocha with Whip", tagline: "Coffee is dessert" },
};

export const questions: Question[] = [
  {
    question: "Which Harry Potter house would you actually want to be sorted into?",
    answers: [
      { text: "Gryffindor — Bold and daring", emoji: "🦁", personality: "Bold Adventurer" },
      { text: "Hufflepuff — Warm and kind", emoji: "🦡", personality: "Sweet Enthusiast" },
      { text: "Ravenclaw — Brings everyone together", emoji: "🦅", personality: "Social Butterfly" },
      { text: "Slytherin — Loves the finer things", emoji: "🐍", personality: "Indulgent Treat" },
    ],
  },
  {
    question: "Pick a show to binge this weekend:",
    answers: [
      { text: "Stranger Things", emoji: "👾", personality: "Bold Adventurer" },
      { text: "The Great British Bake Off", emoji: "🧁", personality: "Sweet Enthusiast" },
      { text: "Friends", emoji: "📺", personality: "Social Butterfly" },
      { text: "Chef's Table", emoji: "🍽️", personality: "Indulgent Treat" },
    ],
  },
  {
    question: "Choose a superpower:",
    answers: [
      { text: "Flight", emoji: "💪", personality: "Bold Adventurer" },
      { text: "Healing touch", emoji: "💖", personality: "Sweet Enthusiast" },
      { text: "Telepathy", emoji: "🧠", personality: "Social Butterfly" },
      { text: "Conjure any dessert instantly", emoji: "🍰", personality: "Indulgent Treat" },
    ],
  },
  {
    question: "Pick your favorite movie genre:",
    answers: [
      { text: "Action/Adventure", emoji: "🎬", personality: "Bold Adventurer" },
      { text: "Romantic Comedy", emoji: "💕", personality: "Sweet Enthusiast" },
      { text: "Ensemble Comedy", emoji: "🎉", personality: "Social Butterfly" },
      { text: "Glamorous Heist Drama", emoji: "💎", personality: "Indulgent Treat" },
    ],
  },
  {
    question: "If you were a Disney character, who would you be?",
    answers: [
      { text: "Moana", emoji: "🌊", personality: "Bold Adventurer" },
      { text: "Winnie the Pooh", emoji: "🍯", personality: "Sweet Enthusiast" },
      { text: "Mickey Mouse", emoji: "🎈", personality: "Social Butterfly" },
      { text: "Remy from Ratatouille", emoji: "🐭", personality: "Indulgent Treat" },
    ],
  },
  {
    question: "Pick a video game genre:",
    answers: [
      { text: "Action/Battle Royale", emoji: "🎮", personality: "Bold Adventurer" },
      { text: "Cozy Farming Sim", emoji: "🌾", personality: "Sweet Enthusiast" },
      { text: "Multiplayer Party Game", emoji: "🕹️", personality: "Social Butterfly" },
      { text: "Life Sim with a luxury mansion", emoji: "🏰", personality: "Indulgent Treat" },
    ],
  },
];
