import styles from '../../styles/NextLecture/NextLecture.module.scss'
import { TbCertificate } from 'react-icons/tb'
import { BsCalendar2Event, BsClock } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function NextLecture() {

    return (

        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <input type="checkbox" id="card1" className={styles.more} aria-hidden="true" />
                    <div className={styles.content}>
                        <div className={styles.front}>
                            <div className={styles.inner}>
                                <h2>PRÓXIMA PALESTRA</h2>
                                <p className={styles.rating}>
                                    13 de julho 2022 - Quarta-feira
                                </p>
                                <label htmlFor="card1" className={styles.button} aria-hidden="true">
                                    Ver detalhes
                                </label>
                            </div>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.inner}>
                                <div className={styles.info}>
                                    <span><TbCertificate /></span>
                                    <div className={styles.icon}>
                                        <span>Emissão de Certificado</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <span><BsCalendar2Event /></span>
                                    <div className={styles.icon}>
                                        <span>13 de julho</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <span><BsClock /></span>
                                    <div className={styles.icon}>
                                        <span>19:00</span>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <p>Nesta semana, nos encontraremos com a Prof. Dra. Carine Corcini, para falar sobre as novas práticas em Biotecnologia para a reprodução de Suínos!</p>
                                    <p>Para mais detalhes, veja nossa página de inscrição!</p>
                                </div>
                                <div className={styles.price}>

                                </div>
                                <div className={styles.location}>
                                    Remoto
                                </div>
                                <Link to="/palestras" className={`${styles.button} ${styles.return}`}><label htmlFor="card1" aria-hidden="true">
                                    Inscreva-se!
                                </label></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default NextLecture