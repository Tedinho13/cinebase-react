import { useState, useEffect } from "react";

const useCollection = () => {
  const [moviesCollection, setMoviesCollection] = useState(
    JSON.parse(localStorage.getItem("collection")) || [],
  );

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(moviesCollection));

    console.log(localStorage);
  }, [moviesCollection]);

  const addToCollection = (id, data) => {
    if (moviesCollection.some((movie) => movie.id === id)) return;

    setMoviesCollection((prev) => [...prev, { id, data }]);
  };

  const removeFromCollection = (id) => {
    setMoviesCollection((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isInCollection = (id) => {
    return moviesCollection.some((movie) => movie.id === id);
  };

  return {
    moviesCollection,
    addToCollection,
    removeFromCollection,
    isInCollection,
  };
};

export default useCollection;
