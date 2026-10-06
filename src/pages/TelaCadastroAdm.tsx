import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";

function TelaCadastroAdm() {
    const {
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdministrador
    } = useAdministrador();

    return (
        <>
            <MenuAdm/>
            <h1>Tela de Cadastro do Administrador</h1>
            <main id="conteudoPrincipal">
                <div id="divMensagem" role="alert">{mensagem}</div>
                <form id="formCadastroAdm" onSubmit={cadastrarAdministrador}>
                    <div>
                        <label htmlFor="txtNome">Nome</label>
                        <br/>
                        <input type="text" id="txtNome" required value={nome} onChange={(e)=>{setNome(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtEmail">E-mail</label>
                        <br/>
                        <input type="email" id="txtEmail" required value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
                    </div>
                    <div>
                        <label htmlFor="txtSenha">Senha</label>
                        <br/>
                        <input type="password" id="txtSenha" required value={senha} onChange={(e)=>{setSenha(e.target.value)}} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </main>
        </>
    );
}

export default TelaCadastroAdm;