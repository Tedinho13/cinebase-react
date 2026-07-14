import VideoModal from "../components/layout/VideoModal";
import NavBar from "../components/layout/NavBar";
import Hero from "../components/hero/Hero";
import MovieGrid from "../components/movies/MovieGrid";
import Pagination from "../components/movies/Pagination";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import useMovies from '../hooks/useMovies';

import './Home.css';

const Home = () => {
    const [page, setPage] = useState(1);

    const {movies, loading, error} = useMovies(page);

    return ( 
        <>
        <VideoModal/>
        <header className="header">
        <NavBar/>
        </header>
            <main className="main">
            <Hero/>
            <section className="movies" id="movies">
                <h2 className="movies__title">Filmy</h2>
                <MovieGrid movies={movies} loading={loading}/>
                <Pagination page={page} onChangePage={setPage}/>
            </section>
            </main>
            <Footer/>
            
        
        </>
     );
}
 
export default Home;