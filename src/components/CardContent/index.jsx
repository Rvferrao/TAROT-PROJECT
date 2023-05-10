export const CardContent = ({ upCard }) => {
  return (
    <div>
      <div className="w-[100px] h-[100px] m-auto">
        <img
          className="w-[120px] h-[120px]"
          src={upCard?.imageFront}
          alt={"carta: " + upCard?.name.toLowerCase()}
        />
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-center p-2 text-[15px]">
          {upCard?.name}
        </h2>
      </div>
      <div className="w-fit h-fit p-2">
        <p className="text-[10px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          aliquam consequatur iste ut, consectetur recusandae, alias assumenda
          dolorem iusto praesentium quasi. Doloremque voluptate magni nostrum
          perferendis minima illum eius in?
        </p>
      </div>
    </div>
  );
};
