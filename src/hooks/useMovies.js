import { useEffect, useState } from "react";
import { fetchData, getPopularMoviesUrl } from "../services/api";

const useMovies = (page) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const url = getPopularMoviesUrl(page);
    fetchData(url)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        setError(err.message);
        console.log(loading);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return { movies, loading, error };
};

export default useMovies;
