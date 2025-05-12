import { DarkSvg } from "@/components/Dark";
import { MovieSvg } from "@/components/Svg";
import Card from "@/components/Card";
import Data from "@/Data/Data";
import { Goggle } from "@/components/Goggle";
const Haha = () => {
  return (
    <div>
      <div className="nav-section h-[59px] justify-center flex  items-center w-screen">
        <div className="flex justify-between w-[95%] items-center h-9">
          <div className="flex  gap-[8px] align-middle">
            <MovieSvg />
            <p>Movie</p>
          </div>
          <div className="flex  gap-[12px]">
            <div className="genre">Genre</div>
            <div className="flex items-center gap-[10px]">
              <Goggle />
              <input type="text" />
            </div>
          </div>
          <DarkSvg />
        </div>
      </div>
      <div className="first-section">
        <div className="first-container">
          <img src="./images/first.png" alt="" />
        </div>
      </div>
      <div className="main-section">
        <div className="main-container">
          <div className="flex justify-between ">
            <p>Upcoming</p>
            <p>See More</p>
          </div>
          <div className="flex flex-wrap ">
            {Data.map((el) => {
              return (
                <Card
                  image={el.imageUrl}
                  vote={el.vote_average}
                  name={el.original_title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Haha;
