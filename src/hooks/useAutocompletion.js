import { useEffect, useState } from "react";
import { fetchData, getSearchedMovieUrl } from "../services/api";

const useAutocompletion = (query) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    let ignore = false;

    const url = getSearchedMovieUrl(query);
    fetchData(url)
      .then((data) => {
        console.log(query);
        console.log(data.results);
        if (!ignore) setData(data.results);
      })
      .catch((err) => console.error(err));

    return () => {
      ignore = true;
    };
  }, [query]);

  return { data };
};

export default useAutocompletion;
