import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import { Link } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {
    return ( 
        <>
            <header className="header">
                <NavBar/>
            </header>
            <main className="main main-error">
                <h1 className="main-error__number">404</h1>
                <h2 className="main-error__info">This page doesn't exist</h2>
                <Link to="/" className="return-btn return-btn--clean"><svg className="return-btn__icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Powróć do strony głównej</Link>
            </main>
            <Footer/>
        </>
     );
}
 
export default ErrorPage;