import { DarkSvg } from "@/components/Dark";
import { MovieSvg } from "@/components/Svg";
import Card from "@/components/Card";
import Data from "@/Data/Data";
import { Goggle } from "@/components/Goggle";
import { DropDownSvg } from "@/components/dropdown";

import { BigStarSvg } from "@/components/bigStarSvg";
import { Play } from "@/components/play";
import useSWR from "swr";
const Haha = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    (url) => fetcher(url, { headers: { authorization: `Bearer ${token}` } })
  );

  if (error) {
    return <div>aldaa</div>;
  }

  if (isLoading) {
    return <div>unshij bn</div>;
  }
  return (
    <div>
      <div className="mb-[59px]">
        <div className=" fixed top-0 z-20 bg-white nav-section h-[59px] justify-center flex  items-center w-screen">
          <div className="  flex justify-between w-[95%] items-center h-9">
            <div className="flex  gap-[8px] items-center">
              <MovieSvg />
              <p className="italic font-bold text-indigo-700">Movie Z</p>
            </div>
            <div className="flex  gap-[12px]">
              <div className="flex items-center genre gap-[8px]  border-[1px] border-[#E4E4E7] h-[36px] w-[97px] rounded-md p-[8px]">
                <DropDownSvg />
                <p>Genre</p>
              </div>
              <div className="flex items-center gap-[10px] border-[1px] border-[#E4E4E7] rounded-md pl-[12px] pr-[12px]">
                <Goggle />
                <input
                  className=" focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="border-[1px] border-[#E4E4E7] rounded-md p-[8px]">
              <DarkSvg />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" first-section flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('./images/first.png')` }}
      >
        <div className="h-screen bg-center bg-cover first-container w-[70%] flex flex-col justify-center">
          <p className="font-normal text-[16px] text-white">Now playing:</p>
          <p className="font-bold  text-[36px] text-white">Wicked</p>
          <div className="flex">
            <BigStarSvg />
            <div className="flex items-baseline">
              <p className="font-semibold text-white text-[18px]">6.9</p>
              <p className="text-[#71717A] text-[16px] font-normal">/10</p>
            </div>
          </div>
          <p className="text-white w-[302px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
          <div className=" flex h-[40px] bg-white w-[145px] rounded-md justify-center items-center">
            <Play />
            <p>Watch Trailer</p>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="main-container">
          <div className="flex justify-between ">
            <p>Upcoming</p>
            <p>See More</p>
          </div>
          <div className="flex flex-wrap ">
            {data.results.map((el) => {
              return (
                <Card
                  image={el.poster_path}
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
