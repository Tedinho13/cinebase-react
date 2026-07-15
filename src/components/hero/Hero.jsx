import '../hero/Hero.css';
import useFeaturedMovie from '../../hooks/useFeaturedMovie';
import { useEffect, useState, useMemo } from 'react';
import Loader from '../layout/Loader';
import { useNavigate } from 'react-router-dom';

const Hero = ({onBtnClick}) => {
    const { movies, loading, error } = useFeaturedMovie();

        const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/movie/${drawedMovie.id}`);
    }

   const drawedMovie = useMemo(() => {
    if (movies.length === 0) return null;
    const index = Math.floor(Math.random() * movies.length);
    return movies[index];
}, [movies]);


    if (loading) return <Loader />;
    if (error) return <p>Błąd: {error}</p>;
    if (!drawedMovie) return null;

    const imageWidth = window.innerWidth >= 1024 ? 1280 : 500;
    const rate = drawedMovie.vote_average.toFixed(1);
    const heroTitle = drawedMovie.original_title;
    const heroDesc = drawedMovie.overview;

    return (
        <section className="hero" id={drawedMovie.id} style={{backgroundImage: `url("https://image.tmdb.org/t/p/w${imageWidth}${drawedMovie.backdrop_path}")`}} onClick={handleRedirect}>
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <div className="badges-box">
                    <div className="badge">Trending now</div>
                    <div className="rate rate--hero">
                        <span className="rate__value"></span>
                        <svg className="rate__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
                            <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
                        </svg>
                        <span className="gray">{rate}/10</span>
                    </div>
                </div>
                <h1 className="hero__title">{heroTitle}</h1>
                <p className="hero__description">{heroDesc}</p>
                <div className="hero__actions">
                    <button className="btn btn--play"  onClick={(e) => {
                        e.stopPropagation();
                        onBtnClick(drawedMovie.id);
                    }}>
                        <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
                        </svg>
                        Play
                    </button>
                    <button className="btn btn--addToList btn--transparent">
                        <svg className="btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                        </svg>
                        My List
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;