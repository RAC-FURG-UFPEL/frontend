import styles from '../../styles/User/User.module.scss'

import AuthContext from '../../contexts/auth'
import useAuth from '../../hooks/useAuth'

import { Link } from 'react-router-dom'

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
                <p>
                    {(() => {
                        if (auth?.data?.firstName) {
                            return (
                                <Link to="/entrar">Minha conta</Link>
                            )
                        } else {
                            return (
                                <Link to="/entrar">Entrar</Link>
                            )
                        }
                    })()}
                </p>
            </div>
        </>
    )
}

export default User