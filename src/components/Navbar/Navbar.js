import styles from '../../styles/Navbar/Navbar.module.scss'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar'

function Navbar() {

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.logo}>
                    <img src={require('../../images/logo-rac-branco.png')} alt='Logo' />
                </div>

                <div className={styles.partners}>
                    <img src={require('../../images/marca-branco-ufpel.png')} alt='UFPEL' />
                    <img src={require('../../images/marca- horizontal-branco-furg.png')} alt='FURG' />
                    <img src={require('../../images/marca-branco-furg.png')} alt='Reppets' />
                </div>
            </div>
            <div className={styles.topbar}>
                <Router>
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
                                <Link to="/">SOBRE NÓS</Link>
                            </li>
                            <li>
                                <Link to="/">CONTATO</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
                <SearchBar />
            </div>
        </>
    )

}

export default Navbar