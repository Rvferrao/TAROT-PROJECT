export const shuffledCards = (cards) => {
  const shuffleCard = [...cards];
  for (let i = shuffleCard.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleCard[i], shuffleCard[j]] = [shuffleCard[j], shuffleCard[i]];
  }
  return shuffleCard;
};
