import { useState } from 'react';
import './Pagination.css';

const Pagination = ({page, onChangePage}) => {

    const pagesNumbers = [page - 1, page, page + 1].filter(n => n >= 1 && n < 501);

    const [searchedPage, setSearchedPage] = useState('');
    const [inputActive, setInputActive] = useState(false);

    return ( 
        <nav className="pagination" aria-label="Paginacja">
            {pagesNumbers.map(num => (
                <a
                    key={num}
                    href="#movies"
                    data-page={num}
                    className={`pagination__item ${num === page ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        onChangePage(num);
                    }}
                    >{num}
                </a>
            ))}
            <button className={`pagination__jump-to ${inputActive ? "hidden" : ""}`} onClick={()=> setInputActive(true)}>...</button>
            {inputActive && <input className="jump-to__input" type="number" min="1" max="500" value={searchedPage} onChange={(e) => setSearchedPage(e.target.value)} onKeyDown={(e) =>{
                if(e.key !== "Enter") return;

                if(searchedPage > 500 || searchedPage < 1) return;
                onChangePage(Number(searchedPage));
                setInputActive(false);
                }}/>}
            <a data-page="500" className="pagination__item" href="#movies" onClick={(e) => onChangePage(e.target.dataset.page)}>500</a>
        </nav>
     );
}

export default Pagination;