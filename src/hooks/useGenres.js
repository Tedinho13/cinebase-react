import { getGenresUrl, fetchData } from "../services/api";
import { useEffect, useState } from "react";

function useGenres() {
  const [genres, setGenres] = useState(new Map());

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
  }, []);

  return {genres};
}

export default useGenres;