import { StarSvg } from "./Star";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="flex ">
        <StarSvg />
        <p className="rating">{props.vote}/10</p>
      </div>
      <p className="title">{props.name}</p>
    </div>
  );
};
export default Card;
