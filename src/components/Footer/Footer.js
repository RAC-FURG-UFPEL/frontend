import styles from '../../styles/Footer/Footer.module.scss'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contain}>
                    <div className={styles.col}>
                        <h1>Sobre nós</h1>
                        <ul>
                            <li><Link to="/sobre-nos">Sobre o Grupo</Link></li>
                            <li><Link to="/sobre-nos/equipe">Nossos Integrantes</Link></li>
                            <li><Link to="/servicos">Serviços</Link></li>
                            <li><Link to="/faca-parte">Faça parte da equipe</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Recursos</h1>
                        <ul>
                            <li><Link to="/publicacoes">Publicações</Link></li>
                            <li><Link to="/palestras">Agenda de palestras</Link></li>
                            <li>Minha conta</li>
                            <li>Indicar palestrante</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Políticas</h1>
                        <ul>
                            <li><Link to="/politica-de-privacidade">Política de privacidade</Link></li>
                            <li><Link to="/termos-de-uso">Termos de uso</Link></li>
                            <li><Link to="/regras-gerais-de-palestras">Regras gerais de palestras</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Suporte</h1>
                        <ul>
                            <li><Link to="/relatar-problema">Relatar um problema</Link></li>
                            <li><Link to="/certificados">Emissão de certificados</Link></li>
                            <li><Link to="/perda-de-presenca">Perda de presença</Link></li>
                            <li><Link to="/contato">Contatos</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Contato</h1>
                        <ul>
                            <li><Link to="/contato/formulario-de-contato">Formulário de contato</Link></li>
                            <li><Link to="/contato/redes-sociais">Redes sociais</Link></li>
                            <li><Link to="/contato/coordenadoria">Coordenadoria</Link></li>
                            <li><Link to="/contato/setores">Outros Setores</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles.col} ${styles.social}`}>
                        <h1>Social</h1>
                        <ul>
                            <li><a href="https://instagram.com/projetorac" target="_blank"><FaInstagram /></a></li>
                            <li><a href="https://facebook.com/projetorac" target="_blank"><FaFacebook /></a></li>
                        </ul>
                    </div>
                    <div className={styles.clearfix}></div>
                    <p>Reprodução Animal Comparada - FURG/UFPel 2022</p>
                </div>
            </div>
        </>
    )
}

export default Footer