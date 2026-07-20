import VideoModal from "../components/layout/VideoModal";
import NavBar from "../components/layout/NavBar";
import MovieDetails from "../components/layout/MovieDetails";
import Footer from "../components/layout/Footer";
import ErrorInfo from "../components/layout/ErrorInfo";

import useMovie from "../hooks/useMovie";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Loader from "../components/layout/Loader";

const Movie = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [movieId, setMovieId] = useState(null);

    const {id} = useParams();

    const {movie, loading, error} = useMovie(id);

    const handleModalOpening = (id) => {
            setModalOpen(true);
            setMovieId(id);
    }
    
        const handleCloseModal = e => {
            if(!e.key !== "Escape") return;
            if(e.key === "Escape") setModalOpen(false);
        }
    
        const handleCloseByClick = () => setModalOpen(false);

    return ( 
        <>
        {error ? <ErrorInfo msg={error}/> : ""}
        {modalOpen && <VideoModal id={movieId} onKeyDown={handleCloseModal} onClick={handleCloseByClick}/>}
        <header className="header">
        <NavBar/>
        </header>
        
        <main className="main">
            {loading ? <Loader/> : <MovieDetails movie={movie} onBtnClick={handleModalOpening}/>}
        </main>
        <Footer/>
        </>
     );
}
 
export default Movie;