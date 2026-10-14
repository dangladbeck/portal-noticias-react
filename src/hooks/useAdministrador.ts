import { useState } from "react";

function useAdministrador() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    
    function cadastrarAdministrador(event:React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const administrador = {nome, email, senha};

        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
        listaAdministradores.push(administrador);
        localStorage.setItem("listaAdministradores", JSON.stringify(listaAdministradores));
        setMensagem("Administrador cadastrado com sucesso!");
    }
    
    function buscarAdministradores() {
        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
        return listaAdministradores;
    }

    function excluirAdministrador(email:string) {
        const listaAdministradores = buscarAdministradores();
        const novaLista = listaAdministradores.filter((adm:any) => {
            adm.email != email
        });
        localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));
    }
    
    return ({
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdministrador,
        buscarAdministradores,
        excluirAdministrador
    });
}

export default useAdministrador;