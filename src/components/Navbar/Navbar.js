import styles from '../../styles/Navbar/Navbar.module.scss'

import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar'

function Navbar() {

    return (
        <>
            <div className={styles.topbar}>
                <Link to="/">
                    <div className={styles.logo}>
                        <div className={styles.logoname}>
                            <h1>RAC</h1>
                            <h2>Reprodução Animal Comparada</h2>
                        </div>
                        <img src={require('../../images/logo-rac-branco.png')} alt='Logo' />
                    </div>
                </Link>

                <div className={styles.partners}>
                    <img src={require('../../images/marca-branco-ufpel.png')} alt='UFPEL' />
                    <img src={require('../../images/marca- horizontal-branco-furg.png')} alt='FURG' />
                    <img src={require('../../images/marca-branco-furg.png')} alt='Reppets' />
                </div>
            </div>
            <div className={styles.topbar_secondary}>
                <div className={styles.Navbar} id="myTopnav">
                    <ul>
                        <li>
                            <Link to="/">INÍCIO</Link>
                        </li>
                        <li>
                            <Link to="/">PUBLICAÇÕES</Link>
                        </li>
                        <li>
                            <Link to="/">PALESTRAS</Link>
                        </li>
                        <li>
                            <Link to="/sobre-nos">SOBRE NÓS</Link>
                        </li>
                        <li>
                            <Link to="/">CONTATO</Link>
                        </li>
                    </ul>
                </div>
                <SearchBar />
            </div>
        </>
    )

}

export default Navbar