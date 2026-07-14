import './MovieGrid.css';
import MovieCard from './MovieCard';
import Loader from '../layout/Loader';

const MovieGrid = ({movies, loading}) => {
    const moviesList = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
    return ( 
        <div className="movies__grid">
                {loading ? <Loader/> : moviesList}
        </div>
     );
}
 
export default MovieGrid;