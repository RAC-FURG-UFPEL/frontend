import styles from '../../styles/AboutUs/AboutUs.module.scss'

import { Link } from 'react-router-dom'

import Display from '../../components/Display/Display'

function AboutUs() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Sobre nós</h1>
            </div>

            <div className={styles.section}>
                <div className={styles.text}>
                    <h2>Nossa origem e parcerias</h2>
                    <p>O Grupo de pesquisa Reprodução Animal Comparada (RAC) foi iniciado em 2012 tem seu centro de atuação nos Laboratórios do setor de morfologia do Instituto de Ciências Biológicas da FURG e nos laboratórios de Reprodução Animal da Faculdade de Veterinária da UFPel, coordenado pelos Professores Dr. Antonio Sergio Varela Junior (FURG) e Drª Carine Dahl Corcini (UFPel) visando formar um grupo multidisciplinar e multi-institucional, com atuação nas seguintes linhas de pesquisa: Biologia Reprodutiva, Toxicologia Reprodutiva e Criopreservação de gametas e embriões.</p>
                    <div className={styles.more_details}>
                        <Link to="/sobre-nos/equipe">Lista de integrantes</Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.float_right} src="https://wp.ufpel.edu.br/repropel/files/2014/06/1004540_612544082131722_1140157940_n.jpg" />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.image}>
                    <img className={styles.float_left} src="https://wp.ufpel.edu.br/repropel/files/2014/06/999727_611457425573721_838999094_n.jpg" />
                </div>
                <div className={styles.text}>
                    <h2>Nosso trabalho e enfoque</h2>
                    <p>O RAC trabalha com diversas espécies animais, como por exemplo (peixes, mamíferos, aves, entre outros). Os estudos científicos desenvolvidos visam integrar as áreas de histologia, histopatológica, morfometria histológica, esteriometria histológica, fisiologia, bioquímica, toxicologia em Reprodução Animal, com foco na reprodutiva. Especificamente, buscamos estudar os processos de danos celulares e alternativas de conservação de gametas, através de seu entendimento, usar soluções que permitam maximizar o resultado biológico e econômico dos sistemas de preservação ambiental assim como produção animal. Os resultados destes trabalhos conduzidos pelo RAC têm sido publicados em importantes revistas nacionais e internacionais especializadas da área de reprodução e toxicologia.</p>
                    <div className={styles.more_details}>
                        <Link to="/servicos">Veja aqui os nossos serviços</Link>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.text}>
                    <h2>Mestrado e Doutorado</h2>
                    <p> A equipe de docentes do grupo orienta no mestrado e doutorado estando entre eles os cursos de Pós-Graduação de Medicina Veterinária da UFPel, Fisiologia animal Comparada da FURG e Biologia de ambientes aquáticos continentais da FURG. O grupo busca incorporar projetos inovadores, em colaborações com USA, Canadá, Portugal, Espanha e França no desenvolvimento de pesquisas com bases reprodutivas. Para maiores informações entrar em contato pelo e-mail furg.rac@gmail.com</p>
                    <div className={styles.more_details}>
                        <Link to="/faca-parte">Para ver nossas publicações, clique aqui!</Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.float_left} src="https://wp.ufpel.edu.br/repropel/files/2014/06/1209278_611457992240331_174792723_n.jpg" />
                </div>
            </div>
            <div className={styles.section_pub}>
                <h2>Últimas publicações</h2>
                <Display qtd="4" />
            </div>
        </div>
    )
}

export default AboutUs