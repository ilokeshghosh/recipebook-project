export default function ItemCard({ imgUrl, title, className = "" }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className={`${className} rounded-full`} src={imgUrl} alt="" />
      <h2 className="italic md:text-2xl text-xl font-bold">{title}</h2>
    </div>
  );
}
