import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import "./login.scss";


const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
      login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello world!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta delectus dolore pariatur ad ratione mollitia minus autem itaque! Ad, architecto. Debitis perferendis, illo, quasi nam, necessitatibus similique adipisci fugit ex ducimus qui nulla laboriosam!</p>
                    <span>Vous n'avez pas encore de compte?</span>
                    <Link to="/register">
                    <button>Créer mon compte</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Se connecter</h1>
                    <form>
                        <input type="text" placeholder="Nom utilisateur"/>
                        <input type="password" placeholder="Mot de passe"/>
                        <button onClick={handleLogin}>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login