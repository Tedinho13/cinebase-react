import './ErrorInfo.css';

const ErrorInfo = ({msg}) => {
    return ( 
        <div className="error">
            <p className="error-info">{msg}</p>
        </div>
     );
}
 
export default ErrorInfo;