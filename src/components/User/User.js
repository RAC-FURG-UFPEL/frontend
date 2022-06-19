import styles from '../../styles/User/User.module.scss'

import AuthContext from '../../contexts/auth'
import useAuth from '../../hooks/useAuth'

function User() {

    const { auth } = useAuth(AuthContext)

    return (
        <>
            <div className={styles.User_card}>
                <img className={styles.picture} />
                <h3>Bem vindo, {
                    auth?.data?.firstName
                        ? auth.data.firstName
                        : "visitante"
                }!</h3>
            </div>
        </>
    )
}

export default User