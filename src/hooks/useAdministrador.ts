import { useState } from "react";
import type Administrador from "../interfaces/administrador";

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
        setTimeout(() => {
            limparCampos();
        }, 2000);
    }

    function limparCampos() {
        setNome("");
        setEmail("");
        setSenha("");
        setMensagem("");
    }
    
    function buscarAdministradores() : Administrador[] {
        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
        return listaAdministradores;
    }

    function excluirAdministrador(email:string) {
        const listaAdministradores = buscarAdministradores();
        const novaLista = listaAdministradores.filter((adm) => adm.email != email);
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