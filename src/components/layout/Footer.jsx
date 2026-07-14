import './Footer.css';

const Footer = () => {
    return ( 
         <footer className="footer">
        <nav className="footer-nav" aria-label="footer nav">
            <ul className="nav-bottom">
                <div className="nav-bottom__icons">
                    <li className="nav-bottom__icon"><svg className="nav-bottom__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-label="Facebook"> <path d="M22 12A10 10 0 1 0 10.44 21.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z"/></svg></li>
                    <li className="nav-bottom__icon"><svg className="nav-bottom__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-label="Instagram"><path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg></li>
                </div>
                <div className="nav-bottom__links">
                    <li className="nav-bottom__item"><a href="#" className="nav-bottom__link">Terms</a></li>
                    <li className="nav-bottom__item"><a href="#" className="nav-bottom__link">Privacy</a></li>
                    <li className="nav-bottom__item"><a href="#" className="nav-bottom__link">Contact</a></li>
                </div>
            </ul>
            <p className="copyright">Cinebase 2026 &copy;. All rights reserved.</p>

        </nav>
    </footer>
     );
}
 
export default Footer;
