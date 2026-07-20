import { getGenresUrl, fetchData } from "../services/api";
import { useEffect, useState } from "react";

function useGenres() {
  const [genres, setGenres] = useState(new Map());
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(getGenresUrl())
      .then((data) => {
        const { genres: genresData } = data;

        const newMap = new Map();

        genresData.forEach((genre) => {
          newMap.set(genre.id, genre.name);
        });

        setGenres(newMap);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  return { genres };
}

export default useGenres;
