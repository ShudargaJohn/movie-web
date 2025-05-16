import { StarSvg } from "./Star";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="h-[340px]"
        src={`https://image.tmdb.org/t/p/original${props.image}`}
        alt=""
      />
      <div className="flex ">
        <StarSvg />
        <p className="rating">{props.vote}/10</p>
      </div>
      <p className="title">{props.name}</p>
    </div>
  );
};
export default Card;
