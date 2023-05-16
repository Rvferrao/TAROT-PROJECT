import { CardContent } from "../CardContent";

export const Card = ({
  card,
  shown,
  upCard,
  index,
  selectedIndex,
  setSelectedIndex,
  handleShowCard,
  isClicked,
  setIsClicked,
}) => {
  return (
    <div>
      {shown ? (
        <div
          className="flex justify-center items-center transition-all duration-[3000ms] rounded-sm -rotate-[360deg] w-[170px] h-[320px] my-2 cursor-pointer"
          onClick={() => {
            setIsClicked(true);
            if (!isClicked) {
              handleShowCard(card.name);
              setSelectedIndex(index);
            }
          }}
        >
          {index === selectedIndex && isClicked ? (
            <div className="flex justify-center items-center shadow-lg bg-blue-500 w-[170px] h-[320px] my-2 rounded-lg cursor-pointer">
              <CardContent upCard={upCard} />
            </div>
          ) : (
            <img
              className="w-[100%] h-[100%]"
              src={card?.imageBackCard}
              alt={"card " + card?.name.toLowerCase()}
            />
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center shadow-lg bg-blue-500 w-[170px] h-[320px] my-2 rounded-lg cursor-pointer">
          <img
            className="w-[140px] h-[280px]"
            src={card?.imageFront}
            alt={"carta: " + card?.name.toLowerCase()}
          />
        </div>
      )}
    </div>
  );
};
