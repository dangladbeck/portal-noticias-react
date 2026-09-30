import { Link } from "react-router";

function Menu(){
    return(
        <nav className="menu">
            <p>
                <Link to="/" className="botao-menu" aria-label="Botão Home">Home</Link>
                <Link to="/login" className="botao-menu" aria-label="Botão Login">Login</Link>
            </p>
        </nav>
    );
}

export default Menu