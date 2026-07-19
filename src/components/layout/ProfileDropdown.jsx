import './ProfileDropdown.css';

import useCollection from '../../hooks/useCollection';

import { useNavigate } from 'react-router-dom';

const ProfileDropdown = ({show}) => {

    const {moviesCollection} = useCollection();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/collection");
    }

    return ( 
        <div onClick={handleClick} className={`profile-dropdown ${show ? "active" : ""}`}>
                <p className="favourites-movies__item">Ulubione filmy: <span className="favourite-movies__length">{moviesCollection.length}</span></p>
        </div>
     );
}
 
export default ProfileDropdown;