import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import axios from "axios";

export const App = () => {
  const [card, setCard] = useState();

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json"
      )
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

  console.log(card);

  return (
    <div className="App">
      <div className="flex justify-center items-center font-bold text-[38px]">
        <h1>TAROT GAME</h1>
      </div>
      <main className="grid grid-cols-3 gap-2 p-4">
        {card != undefined &&
          card.cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
      </main>
    </div>
  );
};
