import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import axios from "axios";
import { Button } from "./components/Button";

export const App = () => {
  const [card, setCard] = useState();
  const [shown, setShown] = useState(false);

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

  const handleControlCard = () => {
    setShown(!shown);
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center font-bold text-[38px]">
        <h1>TAROT GAME</h1>
        <div>
          <Button label={shown ? "Pause" : "Start"} value={handleControlCard} />
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
