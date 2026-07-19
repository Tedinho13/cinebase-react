import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import useAutocompletion from '../../hooks/useAutocompletion';

import './SearchBar.css';

const SearchBar = () => {

    const navigate = useNavigate();
   const [activeItem, setActiveItem] = useState(-1);

    const [autocompleteActive, setAutocompleteActive] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(false);

    const {data} = useAutocompletion(query);
    const cuttedArray = data.slice(0,5);

     const timeoutRef = useRef(null);

     const goToMoviePage = (e) => {
         if (selectedMovie.length === 0) return;
         setSelectedMovie(query);
        e.preventDefault();

        navigate(`/search/${query}`);
        setQuery('');
     }

    const handleAutocompletionShow = (e) => {
        const value = e.target.value;

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setAutocompleteActive(true)
            setQuery(value);
        }, 250)
    }

    const handleKeyDown = (e) => {
        if(e.key === "ArrowUp") {
            setActiveItem(prev => (prev <= 0 ? cuttedArray.length - 1 : prev - 1));

        } else if (e.key === "ArrowDown") { 
            setActiveItem(prev => (prev >= cuttedArray.length - 1 ? 0 : prev + 1));
        } else if(e.key === "Enter" && autocompleteActive && activeItem >= 0) {
            const movie = cuttedArray[activeItem];
            setQuery(movie.original_title);
            setSelectedMovie(movie);
            setAutocompleteActive(false);
            setActiveItem(-1);
        }
    }

    const handleChangeInput = (e) => {
        setQuery(e.target.textContent);
        setAutocompleteActive(false);
        setActiveItem(-1);
        const movie = cuttedArray[activeItem];
        setSelectedMovie(movie);
    }

    return ( 
           <form className="nav__search" onSubmit={goToMoviePage}>
            <div className="nav__search-box">
            <div className="nav__input-box">
            
            <input type="text" className="nav__search-input" placeholder="Search movies" aria-label="Search movies" value={query} onChange={handleAutocompletionShow} onKeyDown={handleKeyDown} />
            {autocompleteActive && <Autocomplete activeItem={activeItem} data={cuttedArray} onClick={handleChangeInput}/>}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="nav__search-icon"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
        </form>
     );
}
 
export default SearchBar;