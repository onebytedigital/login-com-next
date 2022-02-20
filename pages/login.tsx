import styles from "../styles/Login.module.css"
import React, {useState} from "react";

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const autenticarUsuario = () => {
        if (usuario == '') {
            setErro("Preencha o nome de usuário")
        } else if (senha == '') {
            setErro("Preencha a senha")
        } else {
            window.location='/'
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.form}>
                    <h1 className={styles.title}>Login</h1>
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
                    <button className={styles.formButton} onClick={autenticarUsuario}>Cadastrar!</button>
                    <p className={styles.link}>
                        <a href="/cadastrar">Cadasre-se</a>
                    </p>
                    <p className={styles.mensagemErro}>
                        {erro}
                    </p>
                </div>
            </div>
        </div>
    )
}