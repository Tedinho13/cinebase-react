import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import useMovie from "../hooks/useMovie";
import { useMemo, useState } from "react";

import Loader from "../components/layout/Loader";
import MovieGrid from "../components/movies/MovieGrid";
import SearchHeader from "../components/movies/SearchHeader";
import Filters from '../components/movies/Filters';

import useSearchedMovies from "../hooks/useSearchedMovies";
import useGenres from "../hooks/useGenres";

import useCollection from "../hooks/useCollection";
import useSelectedMovies from "../hooks/useSelectedMovies";

const Collection = () => {

    const [filters, setFilters] = useState({genre: false, rate: false, year: false});

    const {genres} = useGenres();

    const {moviesCollection} = useCollection();

    const {movies, loading} = useSelectedMovies(moviesCollection);

    const {filteredMovies, txt} = useMemo(() => {
    let result = movies;
    let txt = '';

        if(filters.rate) {
        result = result.filter(movie => movie.vote_average >= +filters.rate);
        txt += ` rates above ${filters.rate}`;
        }
        if(filters.genre) {
            result = result.filter((movie) => movie.genres.some((genre) => genre.id === +filters.genre));
        txt += ` from genre ${genres.get(+filters.genre)}`;
        }
        if(filters.year) {
           result = result.filter(movie => movie.release_date.slice(0,4) >= filters.year);
            txt += ` from year ${filters.year}`;
        }
        return {filteredMovies: result, txt};

    },[filters, movies]);

    const handleResetFilters = () => {
        setFilters({genre: false, rate: false, year: false});
    }
      
    const handleChangeFilters = (key, value) => {
        console.log(key, value);
        setFilters(prev => ({...prev, [key]: value}));
    }

    return ( 
        <>
        <header className="header">
        <NavBar/>
        </header>
        
        <main className="main">
            {loading ? <Loader/> : <section className="movies movies__flex" id="movies">
                <div className="movies__aside">
                {moviesCollection.length > 5 ? <Filters filters={filters} onChangeFilters={handleChangeFilters} onResetFilters={handleResetFilters}/> : ""}
                </div>
                <div className="movies__main">
                <h2 className="movies__title">Ulubione ({filteredMovies.length})</h2>
                {Object.values(filters).some((value) => value !== false) ? <SearchHeader query={"Ulubione"} length={filteredMovies.length} txt={txt}/> : ""}
                <MovieGrid movies={filteredMovies} loading={loading} searchPage={true}/>
                </div>
            </section> }
            
        </main>
        <Footer/>
        </>
     );
}
 
export default Collection;