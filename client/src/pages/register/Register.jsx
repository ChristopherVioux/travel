import React from 'react';
import { Link } from "react-router-dom";
import "./register.scss";


const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Reseau social</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta delectus dolore pariatur ad ratione mollitia minus autem itaque! Ad, architecto. Debitis perferendis, illo, quasi nam, necessitatibus similique adipisci fugit ex ducimus qui nulla laboriosam!</p>
                    <span>Avez-vous un compte?</span>
                    <Link to="/login">
                    <button>Se connecter</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Créer mon compte</h1>
                    <form>
                        <input type="text" placeholder="Nom utilisateur"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Mot de passe"/>
                        <input type="text" placeholder="Nom"/>
                        <button>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;