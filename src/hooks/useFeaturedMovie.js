import { useEffect, useState } from "react";
import { fetchData, getFeaturedMovieUrl } from "../services/api";

const useFeaturedMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const url = getFeaturedMovieUrl();
    fetchData(url)
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
};

export default useFeaturedMovie;