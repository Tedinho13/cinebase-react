import './Filters.css';
import useGenres from '../../hooks/useGenres';

const Filters = ({filters, onChangeFilters, onResetFilters}) => {

    const {genres} = useGenres();

    const genresTags = Array.from((genres.entries()).map(([id,name]) => (
        <li key={id} id={id} className={`genre__item ${filters.genre === name ? "active" : ""}`} onClick={() => onChangeFilters("genre", id)}>{name}</li>
    )));

    return ( 
             <form className="filters">
            <h3 className="filters__title">
        <svg className="filters__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/>
        </svg>
        Filters
    </h3>

    <div className="filters__content">

        <fieldset className="filters__group">
            <legend className="filters__sub-title">Minimum rating</legend>

            <div className="filters__select filters__select--rating">
                <div className="rating__item">
                    <input className="rating__radio" type="radio" id="exceptional" name="rating" value="8" onChange={(e) => onChangeFilters("rate", e.target.value)} checked={filters.rate === "8"}/>
                    <label htmlFor="exceptional" className="rating__label">8.0+ Exceptional</label>
                </div>

                <div className="rating__item">
                    <input className="rating__radio" type="radio" id="recommended" name="rating" value="7" checked={filters.rate === "7"} onChange={(e) => onChangeFilters("rate", e.target.value)}/>
                    <label htmlFor="recommended" className="rating__label">7.0+ Recommended</label>
                </div>

                <div className="rating__item">
                    <input className="rating__radio" type="radio" id="average" name="rating" value="5" checked={filters.rate === "5"} onChange={(e) => onChangeFilters("rate", e.target.value)}/>
                    <label htmlFor="average" className="rating__label">5.0+ Average</label>
                </div>
            </div>
        </fieldset>


        <fieldset className="filters__group">
            <legend className="filters__sub-title">Genre</legend>

            <ul className="filters__select filters__select--genre">
                {genresTags}
            </ul>
        </fieldset>

        <fieldset className="filters__group">
            <legend className="filters__sub-title">Relase Year</legend>

            <div className="year__hint-box">
                <span className="year__text year__from">1970</span>
                <span className="year__text year__selected" value={filters.year}>{filters.year? filters.year : 1998}</span>
                <span className="year__text year__to">2026</span>
            </div>
            <input className="year__input" type="range" min="1970" max="2026" value={filters.year} onChange={(e) => {
                onChangeFilters("year", e.target.value)
            }}/>
        </fieldset>

        <button type="reset" className="filters__reset-btn" onClick={onResetFilters}>
            Reset all filters
        </button>

    </div>
        </form>
     );
}
 
export default Filters;