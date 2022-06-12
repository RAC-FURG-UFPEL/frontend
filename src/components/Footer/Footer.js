import styles from '../../styles/Footer/Footer.module.scss'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contain}>
                    <div className={styles.col}>
                        <h1>Sobre nós</h1>
                        <ul>
                            <li>Equipe</li>
                            <li>Missão</li>
                            <li>Serviços</li>
                            <li>Faça parte da equipe</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Recursos</h1>
                        <ul>
                            <li>Publicações</li>
                            <li>Agenda de palestras</li>
                            <li>Minha conta</li>
                            <li>Indicar palestrante</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Políticas</h1>
                        <ul>
                            <li>Política de privacidade</li>
                            <li>Termos de uso</li>
                            <li>Regras gerais de palestras</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Suporte</h1>
                        <ul>
                            <li>Relatar um problema</li>
                            <li>Emissão de certificados</li>
                            <li>Perda de presença</li>
                            <li>Contatos</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h1>Contato</h1>
                        <ul>
                            <li>Formulário de contato</li>
                            <li>Redes sociais</li>
                            <li>Enviar email</li>
                            <li>Setores</li>
                        </ul>
                    </div>
                    <div className={`${styles.col} ${styles.social}`}>
                        <h1>Social</h1>
                        <ul>
                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
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