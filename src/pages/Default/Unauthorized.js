import styles from '../../styles/Default/NotFound.module.scss'

import { useNavigate } from "react-router-dom"

function Unauthorized() {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
            <div className={styles.container}>
                <h1>403 Acesso não autorizado</h1>
                <h2>Se você deveria ter acesso a essa página, contate nosso administrador so sistema:</h2>
                <h2>andrew.ribeiro@inf.ufpel.edu.br</h2>
                <button onClick={goBack}>Voltar</button>
            </div>
        </>
    )
}

export default Unauthorized