export const Card = ({ card }) => {
  return (
    <div className="">
      <img src={card.imageFront} alt={"card " + card.name} />
      <div></div>
    </div>
  );
};
