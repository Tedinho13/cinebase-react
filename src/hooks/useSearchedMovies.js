import { useEffect, useState } from "react";
import {
  fetchData,
  getSearchedMovieUrl,
} from "../services/api";

const useSearchedMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const types = ["Trailer", "Featurette", "Teaser"];

    const url = getSearchedMovieUrl(query);
    fetchData(url)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return { movies, loading, error };
};

export default useSearchedMovies;
