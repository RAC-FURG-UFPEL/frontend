import styles from '../../styles/User/User.module.scss'

import useAuth from '../../hooks/useAuth'

function User() {

    const Logged = () => {
        const signed = useAuth()

        return signed > 0 ? children : <Login />
    }

    return(
        <>
            <div className={styles.User_card}>
                <img className={styles.picture} />
                <h3>Bem vindo, {name}!</h3>
            </div>
        </>
    )
}

export default User