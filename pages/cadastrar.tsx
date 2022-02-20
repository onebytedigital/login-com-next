import styles from "../styles/Login.module.css"
import {NextPage} from "next"
import React, {useState} from "react"

export default function Cadastrar() {

    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const limparCampos = () => {
        setNome("")
        setUsuario("")
        setSenha("")
    }

    const inserirUsuario = () => {
        if (nome == '') {
            setErro("Preencha o campo nome")
        } else if (usuario == '') {
            setErro("Preencha o nome de usuário")
        } else if (senha == '') {
            setErro("Preencha a senha")
        } else {
            window.location.href='/login'
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.form}>
                    <h1 className={styles.title}>Cadastrar</h1>
                    <input type="text"
                           className={styles.input}
                           placeholder="Nome"
                           onChange={(e) => setNome(e.target.value)}
                           value={nome}
                    />
                    <input type="text"
                           className={styles.input}
                           placeholder="Nome de Usuário"
                           onChange={(e) => setUsuario(e.target.value)}
                           value={usuario}
                    />
                    <input type="password"
                           className={styles.input}
                           placeholder="Sua Senha"
                           onChange={(e) => setSenha(e.target.value)}
                           value={senha}
                    />
                    <button className={styles.formButton} onClick={inserirUsuario}>Cadastrar!</button>
                    <p className={styles.mensagemErro}>
                        {erro}
                    </p>
                </div>
            </div>
        </div>
    )
}