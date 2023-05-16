import axios from "axios";

export const handleRequest = async (url, setCard) => {
  await axios
    .get(`${url}`)
    .then((response) => {
      const tarotData = response.data;

      tarotData.cards.forEach((card) => {
        card.imageFront = tarotData.imagesUrl + card.image;
        card.imageBackCard = tarotData.imageBackCard;
      });
      setCard(tarotData);
    })
    .catch((error) => {
      console.log(error);
    });
};
