import MenuAdm from "../components/MenuAdm";

function TelaCadastroAdm() {


    return (
        <>
            <MenuAdm/>
            <h1>Tela de Cadastro do Administrador</h1>
            <main id="conteudoPrincipal">
                <div id="divMensagem" role="alert"></div>
                <form id="formCadastroAdm">
                    <div>
                        <label htmlFor="txtNome">Nome</label>
                        <br/>
                        <input type="text" id="txtNome" required /> 
                    </div>
                    <div>
                        <label htmlFor="txtEmail">E-mail</label>
                        <br/>
                        <input type="email" id="txtEmail" required /> 
                    </div>
                    <div>
                        <label htmlFor="txtSenha">Senha</label>
                        <br/>
                        <input type="password" id="txtSenha" required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            
            
            </main>
        </>
    );
}

export default TelaCadastroAdm;