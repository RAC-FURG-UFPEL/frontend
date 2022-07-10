import styles from '../../styles/AboutUs/AboutUs.module.scss'

import { Link } from 'react-router-dom'

import Display from '../../components/Display/Display'

function Lectures() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Palestras</h1>
            </div>

            <div className={styles.section}>
                <div className={styles.text}>
                    <h2>Vem aí!</h2>
                    <p>Nesta semana, nos encontraremos com a Prof. Dra. Carine Corcini, para falar sobre as novas práticas em Biotecnologia para a reprodução de Suínos!</p>
                    <p>A palestra ocorrerá no dia 13 de julho de 2022 (quarta-feira) às 19 horas, contando com emissão de certificado para os presentes.</p>
                    <p>Garanta a sua vaga de forma completamente gratuita!</p>
                    <div className={styles.more_details}>
                        <Link to="/palestras/id">Formulário de Inscrição</Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.float_right} src='publi1.jpeg' />
                </div>
            </div>
            
            <div className={styles.section_pub}>
                <h2>Últimas publicações</h2>
                <Display qtd="4" />
            </div>
        </div>
    )
}

export default Lectures