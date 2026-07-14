const VideoModal = (url) => {
    return ( 
        <div className="video__overlay">
            <div className="loader-overlay">
                        <div className="loader off"></div>
                </div>
            <iframe className="video__item" src="" frameBorder="0">
                
            </iframe>
        </div>
     );
}
 
export default VideoModal;