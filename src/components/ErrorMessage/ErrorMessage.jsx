import "./ErrorMessage.css"
import { Link } from "react-router-dom";

const ErrorMessage=()=>{
    return(
            <div className="error">
                <h1 className="error_title">404</h1>
                <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">
                    <p className="error_link">Retourner sur la page d'accueil</p>
                </Link>
            </div>
    )
}

export default ErrorMessage