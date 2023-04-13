export const Card = ({ card }) => {
  return (
    <div className="flex justify-center items-center shadow-lg bg-blue-500 w-[160px] h-[300px] my-2 mr-2 rounded-lg">
      <img
        className="w-[140px] h-[280px]"
        src={card.imageFront}
        alt={"card " + card.name}
      />
      <div></div>
    </div>
  );
};
