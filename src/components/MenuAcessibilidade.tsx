import "../styles/menuAcessibilidade.css";
import useAcessibilidade from "../hooks/useAcessibilidade";

function MenuAcessibilidade() {

    const {
        menuAberto,
        abrirMenu,
        aumentarFonte,
        diminuirFonte,
        alterarContraste
    } = useAcessibilidade();

    return(
        <div>
            <span aria-label="início da página">&nbsp;</span>
            <a href="#conteudoPrincipal" className="skipLink" >Ir para conteúdo principal</a>
            <button id="btnAcessibilidade" aria-expanded={menuAberto} onClick={abrirMenu}>
                <img src="./acessibilidade.png" alt="Símbolo universal de acessibilidade, representado por uma figura humana estilizada dentro de um círculo." width="24"/>
                Acessibilidade
            </button>
            <div id="menuAcessibilidade" hidden={!menuAberto}>
                <button id="btnAumentarFonte" aria-label="Aumentar Fonte" onClick={aumentarFonte}>Aumentar Fonte</button>
                <button id="btnDiminuirFonte" aria-label="Diminuir fonte" onClick={diminuirFonte}>Diminuir Fonte</button>
                <button id="btnAlterarContraste" aria-label="alterar contraste" onClick={alterarContraste}>Alterar Contraste</button>
            </div>
        </div>
    );
}

export default MenuAcessibilidade;