import useMovieVideo from '../../hooks/useMovieVideo';
import './VideoModal.css';

import { useEffect, useRef } from 'react';

import Loader from './Loader';
import ErrorInfo from './ErrorInfo';

const VideoModal = ({id, onKeyDown, onClick}) => {
    const {movieTrailer, loading, error} = useMovieVideo(id);

    const overlayRef = useRef(null);

    useEffect(() => {
        overlayRef.current?.focus();
    }, []);

    if (error) return <ErrorInfo msg={error}/>;

    if (!loading && !movieTrailer) return <ErrorInfo msg="Brak dostępnego trailera"/>;

    return ( 
        <div className="video__overlay active" ref={overlayRef} onKeyDown={onKeyDown} onClick={onClick}  tabIndex={-1}>
            {loading ? <Loader/> : <iframe className={`video__item ${loading ? "" : "active"}`} src={`https://www.youtube.com/embed/${movieTrailer.key}`} frameBorder="0">
            </iframe>}
        </div>
     );
}
 
export default VideoModal;