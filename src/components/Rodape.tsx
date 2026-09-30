import { Link } from "react-router";

function Rodape(){
return(
<footer className="rodape">
    <p>Desenvolvido por:</p>
    <Link to="/sobre">Daniel Pires</Link>
</footer>
);
}

export default Rodape;