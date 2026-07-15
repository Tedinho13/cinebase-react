import { useEffect, useState } from "react";
import { fetchData, getMovieVideoUrl } from "../services/api";

const useMovieVideo = (id) => {
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const types = ["Trailer", "Featurette", "Teaser"];

    const url = getMovieVideoUrl(id);
    fetchData(url)
      .then((data) => {
        const trailer =
          data.results.find(
            (video) =>
              video.site === "YouTube" &&
              types.includes(video.type) &&
              video.official,
          ) ||
          data.results.find(
            (video) => video.site === "YouTube" && types.includes(video.type),
          ) ||
          data.results.find((video) => video.site === "YouTube");

        console.log(trailer);
        setMovieTrailer(trailer);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { movieTrailer, loading, error };
};

export default useMovieVideo;
