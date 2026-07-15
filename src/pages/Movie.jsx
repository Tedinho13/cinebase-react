import VideoModal from "../components/layout/VideoModal";
import NavBar from "../components/layout/NavBar";
import MovieDetails from "../components/layout/MovieDetails";
import Footer from "../components/layout/Footer";

import useMovie from "../hooks/useMovie";

import { useParams } from "react-router-dom";
import Loader from "../components/layout/Loader";
const Movie = () => {

    const {id} = useParams();

    const {movie, loading, error} = useMovie(id);

    return ( 
        <>
        <VideoModal/>
        <header className="header">
        <NavBar/>
        </header>
        
        <main className="main">
            {loading ? <Loader/> : <MovieDetails movie={movie}/>}
        </main>
        <Footer/>
        </>
     );
}
 
export default Movie;