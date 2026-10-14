import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";

function TelaListaAdm() {

    const {buscarAdministradores} = useAdministrador();
    const listaAdministradores = buscarAdministradores();

    return(
        <>
            <MenuAdm/>            
            <main id="conteudoPrincipal">
                <h1>Lista de Administradores</h1>    
                <table>
                    <thead>
                        <tr><th>Nome</th><th>e-Mail</th></tr>
                    </thead>
                    <tbody>
                        {listaAdministradores.map((adm:any) => (
                            <tr><td>{adm.nome}</td><td>{adm.email}</td></tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default TelaListaAdm;