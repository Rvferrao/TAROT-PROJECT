export const Card = ({ card, shown }) => {
  return (
    <div>
      {shown ? (
        <div className="flex justify-center items-center transition-all duration-1000  -rotate-180  w-[160px] h-[300px] my-2 cursor-pointer">
          <img
            className="w-[100%] h-[100%]"
            src={card.imageBackCard}
            alt={"card " + card.name.toLowerCase()}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center shadow-lg bg-blue-500 w-[160px] h-[300px] my-2  rounded-lg cursor-pointer">
          <img
            className="w-[140px] h-[280px]"
            src={card.imageFront}
            alt={"carta: " + card.name.toLowerCase()}
          />
        </div>
      )}
    </div>
  );
};
