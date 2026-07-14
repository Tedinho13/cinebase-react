import { useNavigate } from "react-router-dom";
import useGenres from "../../hooks/useGenres";
import './MovieCard.css';

const MovieCard = ({movie}) => {

    const navigate = useNavigate();

    const imagePath =
        movie.poster_path ?
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "img/no-cover.webp";

      const movieRate =
        movie.vote_average === 0 ? "Brak" : movie.vote_average.toFixed(1);

        const {genres} = useGenres();

      const genresNames =
        movie.genre_ids ?
          genres.get(movie?.genre_ids[0])
        : movie.genres[0].name;
    
    return ( 
        <div className="movie__card" id={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                    <div className="movie__poster">
                        <img src={imagePath} alt="${movie.original_title} poster" className="movie__image"></img>
                        <div className="rate rate--poster">{movieRate}</div>
                    </div>
                    <h3 className="movie__title">{movie.original_title}</h3>
                    <p className="movie__info">Release date: <span className="movie__date">{movie.release_date}</span> <span className="bull">&bull;</span> <span className="genre">{genresNames ||"Brak gatunku"}</span></p>
        </div>
     );
}
 
export default MovieCard;