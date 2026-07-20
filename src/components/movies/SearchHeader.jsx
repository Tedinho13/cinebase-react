import './SearchHeader.css';

const SearchHeader = ({query, length, txt}) => {
    const description = length > 0 ? <p className="movies__search-description">Found <span className="movies__search-matches">{length}</span> matches</p> : <p className="movies__search-description">No matches found</p>;
    return ( 
            <>
            <h2 className="movies__title">Searched results for <span className="movie__query">{query}</span> {txt}</h2>
                {description}
            </>
     );
}
 
export default SearchHeader;