import styles from '../../styles/Default/NotFound.module.scss'

function NotFound() {
    return (
        <>
            <div className={styles.container}>
                <h1>Erro 404: Parece que estamos perdidos!</h1>
                <h2>Se deveria haver alguma página aqui, por favor contate nosso o administrador do sistema:</h2>
                <h2>andrew.ribeiro@inf.ufpel.edu.br</h2>
            </div>
        </>
    )
}

export default NotFound