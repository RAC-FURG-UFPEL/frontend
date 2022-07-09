import styles from '../../styles/Login/Login.module.scss';

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Api from '../../api/Api';
import AuthContext from "../../contexts/auth";
import useAuth from '../../hooks/useAuth';

const LOGIN_URL = '/auth/authenticate'

const Login = () => {

    const { setAuth } = useAuth(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {

            const response = await Api.post(LOGIN_URL,
                JSON.stringify({ email: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )

            console.log(JSON.stringify(response?.data))
            const token = response?.data?.accessToken
            const roles = response?.data?.roles
            const data = response?.data?.user
            setAuth({ user, data, roles, token })
            setUser('')
            setPwd('')
            setSuccess(true)
            navigate(from, { replace: true })

        } catch (err) {

            if (!err?.response){
                setErrMsg('Sem resposta do servidor')
            } else if (err.response?.status === 400) {
                setErrMsg('Dados não suficientes')
            } else if (err.response?.status === 401) {
                setErrMsg('Acesso não autorizado')
            } else {
                setErrMsg('Falha ao entrar')
            }
            errRef.current.focus()

        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Você entrou com sucesso!</h1>
                    <p><Link to="/">Ir para o início</Link></p>
                </section>
            ) : (
                <div className={styles.login_bg}>
                    <div className={styles.form_fields}>

                        <section className={`${styles.grid} ${styles.align__item}`}>

                            <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `${styles.offscreen}`} aria-live="assertive">{errMsg}</p>

                            <div className={styles.register}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.site__logo} width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                                <h2>Entrar</h2>
                                <form onSubmit={handleSubmit} className={styles.form}>

                                    <div className={styles.form__field}>
                                        <label htmlFor="user">Email:</label>
                                        <input
                                            placeholder="seunome@email.com"
                                            type="email"
                                            id="user"
                                            name="user"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                        />
                                    </div>
                                    <div className={styles.form__field}>
                                        <label htmlFor="password">Senha:</label>
                                        <input
                                            placeholder="••••••••••••"
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                        />
                                    </div>
                                    <div className={styles.form__field}>
                                        <button>Entrar</button>
                                    </div>

                                </form>

                                <p>Ainda não é cadastrado? <Link to="/cadastrar">Cadastre-se!</Link></p>

                                <Link to="/"><span>Início</span></Link>
                            </div>
                        </section>

                    </div>
                </div>
            )}
        </>
    )

}

export default Login