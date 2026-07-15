import './MovieDetails.css';

import Loader from "./Loader";
import useGenres from '../../hooks/useGenres';

import { Link } from 'react-router-dom';

const MovieDetails = ({movie}) => {
    console.log(movie.backdrop_path);

    const width = window.innerWidth > 1024 ? 1280 : 500;

    const genresNamesExtracted = movie.genres.map(genre => genre.name);

    const {genres} = useGenres();

    const genresNames = 
        movie.genre_ids ?
          genres.get(movie?.genre_ids[0])
        : genresNamesExtracted.join(" ");


    const runtime = (movie.runtime / 60).toFixed(0);

    const movieRate =
        movie.vote_average === 0 ? "Brak" : movie.vote_average.toFixed(1);
    return ( 
        <section className="movie-details">

        <div className="movie-details__header" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w${width}${movie.backdrop_path})`}}>
            <div className="hero__overlay"></div>

            <Link to="/" className="movie-details__back"><svg className="movie-details__back-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Back to main page</Link>

            <div className="movie-details__header-components">
                <div className="movie-details__poster">
                    <img className="movie-details__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                </div>
                <div className="movie-details__content">
                    <div className="rate rate--hero rate--visible"><span className="rate__value">{movieRate}</span><svg className="rate__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg> <span className="gray">/10</span></div>
                    <div className="movie-details__meta">
                        <svg className="movie-details__length-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm-99.5 291.5Q275-137 226-186t-77.5-114.5Q120-366 120-440t28.5-139.5Q177-645 226-694t114.5-77.5Q406-800 480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80q-74 0-139.5-28.5ZM678-242q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82ZM480-440Z"/></svg><span className="movie-details__length">{runtime}h</span><span className="movie-details__genre">{genresNames || "Brak tytułu"}</span>
                    </div>
                        <h1 className="header movie-details__title">{movie.original_title}</h1>
                    <div className="movie-details__actions">
                        <span className="movie-details__rating"></span>
                        <button className="btn btn--play btn--movie-play"><svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>Play</button>
                        <button className="btn btn--addToList btn--black"><svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  ><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                    </div>
                </div>
            </div>
            </div>

            <div className="movie-details__body">
                <section className="movie-details__story">
                    <h2 className="header movie-details__story-title">The Story</h2>
                    <p className="movie-details__story-text">{movie.overview}</p>
                </section>
            </div>
    </section>
     );
}
 
export default MovieDetails;