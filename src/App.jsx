import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { shuffledCards } from "./helpers/ShuffledCards";
import axios from "axios";

export const App = () => {
  const [card, setCard] = useState();
  const [shown, setShown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    if (card) {
      handleStartGame(card);
    }
  }, [gameStarted]);

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

  const handleControlGame = () => {
    setShown(!shown);
    setGameStarted(!gameStarted);
  };

  const handleStartGame = (card) => {
    const initialCards = [...card.cards];
    const newCards = shuffledCards(initialCards);
    setCard({ ...card, cards: newCards });
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center font-bold text-[38px] pt-6">
        <h1 className="font-bold">TAROT GAME</h1>
        <div>
          <Button label={shown ? "Pause" : "Start"} value={handleControlGame} />
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <main className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {card != undefined &&
            card.cards.map((card, index) => {
              return <Card card={card} key={index} shown={shown} />;
            })}
        </main>
      </div>
    </div>
  );
};
