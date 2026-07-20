import { useEffect, useState } from "react";
import { fetchData, getMovieUrl } from "../services/api";

const useMovie = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = getMovieUrl(id);
    fetchData(url)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { movie, loading, error };
};

export default useMovie;
