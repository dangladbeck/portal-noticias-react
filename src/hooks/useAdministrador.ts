import { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";

function useAdministrador() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
    
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

    function alterarAdministrador(event:React.SubmitEvent<HTMLFormElement>, email:string) {
        event.preventDefault();

        const listaAdministradores = buscarAdministradores();
        const novaLista = listaAdministradores.map((adm) => {
            if (adm.email == email) {
                return {nome, email, senha};
            }
            return adm;
        });
        localStorage.setItem("listaAdministradores", JSON.stringify(novaLista));
        setMensagem("Administrador atualizado com sucesso!");
        setTimeout(() => {
            navigate("/telaListaAdm");
        }, 2000);
    }
    
    return ({
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdministrador,
        buscarAdministradores,
        excluirAdministrador,
        alterarAdministrador
    });
}

export default useAdministrador;