import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

import { Link } from 'react-router-dom';

import styles from '../../styles/Login/Login.module.scss'

function Register() {

    const { signin } = useAuth()
    const navigate = useNavigate

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !password) {
            setError("Preencha os campos")
            return
        }

        const res = signin(email, password)

        if (res) {
            setError(res)
            return
        }

        navigate("/admin")
    }

    return (
        <>

            <div className={styles.login_bg}>
                <div className={styles.form_fields}>

                    <div className={`${styles.grid} ${styles.align__item}`}>
                        <div className={styles.register}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.site__logo} width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                            <h2>Cadastrar</h2>
                            <div className={styles.form}>
                                <div className={styles.form__field}>
                                    <input type="email" id="user" name="user" placeholder="seunome@email.com" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
                                </div>
                                <div className={styles.form__field}>
                                    <input type="password" id="password" name="password" placeholder="Nova senha" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]} />
                                </div>
                                <div className={styles.form__field}>
                                    <button type="submit" onClick={handleLogin}>Cadastrar</button>
                                </div>
                            </div>
                            <span>{error}</span>

                            <p>Já possui uma conta? <Link to="/entrar">Entre aqui!</Link></p>

                            <Link to="/"><span>Início</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Register