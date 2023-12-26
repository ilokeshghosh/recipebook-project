export default function IngredientCard({imgUrl,ingredient, quantity }) {
  return (
    <div className="flex w-[150px]  justify-center items-center gap-2 mx-auto md:mx-0 ">
      <input className="" type="checkbox" name="" id="" />
      <img
        className="w-[100px] rounded-lg border border-slate-600"
        src={imgUrl}
        alt=""
      />

      {/* name and amount */}
      <div className="flex break-words  flex-col font-bold">
        <h2>{ingredient}</h2>
        <h2>{quantity}</h2>
      </div>
    </div>
  );
}
