export const Card = ({ card, shown }) => {
  return (
    <div>
      {shown ? (
        <div className="flex justify-center items-center shadow-lg  w-[160px] h-[300px] my-2 ">
          <img
            className="w-[160px] h-[300px]"
            src={card.imageBackCard}
            alt={"card " + card.name}
          />
          <div></div>
        </div>
      ) : (
        <div className="flex justify-center items-center shadow-lg bg-blue-500 w-[160px] h-[300px] my-2  rounded-lg">
          <img
            className="w-[140px] h-[280px]"
            src={card.imageFront}
            alt={"card " + card.name}
          />
          <div></div>
        </div>
      )}
    </div>
  );
};
