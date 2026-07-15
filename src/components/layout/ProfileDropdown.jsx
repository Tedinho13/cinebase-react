import './ProfileDropdown.css';

const ProfileDropdown = (show) => {
    return ( 
        <div className={`profile-dropdown ${show ? "active" : ""}`}>
                <p className="favourites-movies__item">Ulubione filmy: <span className="favourite-movies__length">0</span></p>
        </div>
     );
}
 
export default ProfileDropdown;