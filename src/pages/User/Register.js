import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";

import Api from '../../api/Api';

import styles from '../../styles/Login/Login.module.scss';

const USER_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/auth/register'

const Register = () => {

    const userRef = useRef()
    const nameRef = useRef()
    const lnameRef = useRef()
    const cpfRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [name, setName] = useState('')
    const [nameFocus, setNameFocus] = useState(false)

    const [lname, setLname] = useState('')
    const [lnameFocus, setLnameFocus] = useState(false)

    const [cpf, setCpf] = useState('')
    const [cpfFocus, setCpfFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    useEffect(() => {
        lnameRef.current.focus()
    }, [])

    useEffect(() => {
        cpfRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        console.log(name)
    }, [name])

    useEffect(() => {
        console.log(lname)
    }, [lname])

    useEffect(() => {
        console.log(cpf)
    }, [cpf])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)

        if (!v1 || !v2) {
            setErrMsg("Entrada inválida!")
            return
        }

        try {

            console.log("CARALHO", name, lname, cpf)

            const response = await Api.post(REGISTER_URL,
                JSON.stringify(
                    {
                        name: "John Doe",
                        email: user,
                        password: pwd,
                        firstName: name,
                        lastName: lname,
                        cpf: cpf,

                        birthDate: "2022-05-28T21:56:49.906Z",
                        title: "Graduando",
                        university: "UFPel"
                    }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response.data)
            console.log(response.data.token)
            console.log(JSON.stringify(response))
            setSuccess(true)

        } catch (err) {
            console.log(err)
            setErrMsg('Registration Failed')
            errRef.current.focus()
        }
    }

    return (
        <>

            {success ? (
                <section>
                    <h1>Registrado com sucesso!</h1>
                    <p><Link to="/entrar">ENTRAR</Link></p>
                </section>
            ) : (

                <div className={styles.login_bg}>
                    <div className={styles.form_fields}>

                        <section className={`${styles.grid} ${styles.align__item}`}>

                            <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `${styles.offscreen}`} aria-live="assertive">{errMsg}</p>

                            <div className={styles.register}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.site__logo} width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                                <h2>Cadastrar</h2>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.form__field}>
                                        <label htmlFor="user">
                                            Email:
                                            <span className={validName ? `${styles.valid}` : `${styles.hide}`}>
                                                <FaCheck />
                                            </span>
                                            <span className={validName || !user ? `${styles.hide}` : `${styles.invalid}`}>
                                                <FaTimes />
                                            </span>
                                        </label>
                                        <input
                                            placeholder="seunome@email.com"
                                            type="email"
                                            id="user"
                                            name="user"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                        />
                                        <p id="uidnote" className={userFocus && user && !validName ? `${styles.instructions}` : `${styles.offscreen}`}>
                                            <FaInfoCircle className={styles.info_circle} />
                                            Insira um email válido!
                                        </p>
                                    </div>

                                    <div className={styles.form__field}>
                                        <label htmlFor="name">
                                            Primeiro Nome:
                                        </label>
                                        <input
                                            placeholder="Primeiro Nome"
                                            type="text"
                                            id="name"
                                            name="name"
                                            ref={nameRef}
                                            autoComplete="off"
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            onFocus={() => setNameFocus(true)}
                                            onBlur={() => setNameFocus(false)}
                                        />
                                    </div>

                                    <div className={styles.form__field}>
                                        <label htmlFor="lname">
                                            Sobrenome:
                                        </label>
                                        <input
                                            placeholder="Sobrenome"
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            ref={lnameRef}
                                            autoComplete="off"
                                            onChange={(e) => setLname(e.target.value)}
                                            required
                                            onFocus={() => setLnameFocus(true)}
                                            onBlur={() => setLnameFocus(false)}
                                        />
                                    </div>

                                    <div className={styles.form__field}>
                                        <label htmlFor="cpf">
                                            CPF:
                                        </label>
                                        <input
                                            placeholder="CPF"
                                            type="text"
                                            id="cpf"
                                            name="cpf"
                                            ref={cpfRef}
                                            autoComplete="off"
                                            onChange={(e) => setCpf(e.target.value)}
                                            required
                                            onFocus={() => setCpfFocus(true)}
                                            onBlur={() => setCpfFocus(false)}
                                        />
                                    </div>

                                    <div className={styles.form__field}>
                                        <label htmlFor="password">
                                            Senha:
                                            <span className={validPwd ? `${styles.valid}` : `${styles.hide}`}>
                                                <FaCheck />
                                            </span>
                                            <span className={validPwd || !pwd ? `${styles.hide}` : `${styles.invalid}`}>
                                                <FaTimes />
                                            </span>
                                        </label>
                                        <input
                                            placeholder="Nova senha"
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? `${styles.instructions}` : `${styles.offscreen}`}>
                                            <FaInfoCircle className={styles.info_circle} />
                                            8 to 24 characters.<br />
                                            Deve conter uma letra maiúscula, uma letra minúscula, um número e um caractere especial. <br />
                                            Caracteres especiais permitidos: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>.
                                        </p>
                                    </div>
                                    <div className={styles.form__field}>
                                        <label htmlFor="confirm_pwd">
                                            Confirmar senha:
                                            <span className={validMatch && matchPwd ? `${styles.valid}` : `${styles.hide}`}>
                                                <FaCheck />
                                            </span>
                                            <span className={validMatch || !matchPwd ? `${styles.hide}` : `${styles.invalid}`}>
                                                <FaTimes />
                                            </span>
                                        </label>
                                        <input
                                            placeholder="Digite novamente a sua senha"
                                            type="password"
                                            id="confirm_pwd"
                                            name="confirm_pwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <p id="pwdnote" className={matchFocus && !validMatch ? `${styles.instructions}` : `${styles.offscreen}`}>
                                            <FaInfoCircle className={styles.info_circle} />
                                            A senha e confirmação precisam ser idênticas!
                                        </p>
                                    </div>
                                    <div className={styles.form__field}>
                                        <button disabled={!validName || !validPwd || !validMatch ? true : false} >Cadastrar</button>
                                    </div>
                                </form>

                                <p>Já possui uma conta? <Link to="/entrar">Entre aqui!</Link></p>

                                <Link to="/"><span>Início</span></Link>
                            </div>
                        </section>

                    </div>
                </div>

            )}
        </>
    )

}

export default Register