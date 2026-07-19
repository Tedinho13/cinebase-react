import { useEffect, useState } from "react";
import { fetchData, getMovieUrl } from "../services/api";

const useSelectedMovies = (data) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const promises = data.map((movie) => fetchData(getMovieUrl(movie.id)));
    Promise.all(promises)
      .then((data) => setMovies(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [data]);

  return { movies, loading, error };
};

export default useSelectedMovies;
