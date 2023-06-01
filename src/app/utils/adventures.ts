import ADVENTURES from "constants/adventures";

const getCurrentAdventure = (slug: string) => {
  return ADVENTURES[slug] || ADVENTURES.random;
};

export { getCurrentAdventure };
