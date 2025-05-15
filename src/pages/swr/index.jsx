import useSWR from "swr";

const SWR = () => {
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
      {data.results.map((movie) => {
        return <p>{movie.title}</p>;
      })}
    </div>
  );
};

export default SWR;
