import styles from '../styles/Navbar.module.css'

import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className={styles.topbar}>
            <div className={styles.banner}>

                

                <div className={styles.partners}>
                    <img src={require('../images/UFPel.png')} alt='UFPEL' />
                    <img src={require('../images/marca- horizontal-branco-furg.png')} alt='FURG' />
                    <img src={require('../images/marca-branco-furg.png')} alt='Reppets' />
                </div>

                <div className={styles.logo}>
                    <img src={require('../images/logo-rac-branco.png')} alt='Logo' />
                </div>

            </div>
            <Router>
                <div className={styles.Navbar}>
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
                            <Link to="/">SOBRE</Link>
                        </li>
                        <li>
                            <Link to="/">POLÍTICA DE PRIVACIDADE</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    )

}

export default Navbar


.topbar {
    background: rgb(25, 35, 105);
    font-size: 11pt;
}

.banner {
    max-height: 100px;
    margin-bottom: 0.8em;
}

.logo {
    max-height: 100px;
    width: auto;
    padding: 1em 2em;
}

.logo img {
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: auto;
    max-width: 250px;
}

.partners {
    float: right;
    display: flex;
    margin: 1em 4em;
}

.partners img {
    max-height: 5em;
    width: auto;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 1em 1em;
}

/* BANNER */



/* NAVBAR */

.Navbar {
    padding: 1vh;
}

.Navbar a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    transition: 0.5s;
}

.Navbar a:hover {
    text-decoration: none;
    color: rgb(179, 179, 179);
}

.Navbar ul {
    list-style: none;
    display: flex;
}

.Navbar ul li {
    padding: 0 0.8em;
}











<div className={styles.card}>
                    <div className={styles.card__header}>
                        <span className={styles.tag_tag_blue}>Artigo Científico</span>
                        <img src='https://source.unsplash.com/600x400/?sheep' alt="card__image" className={styles.card__image} width="600" />
                    </div>
                    <div className={styles.card__body}>
                        <h4>REPRODUÇÃO DE OVELHAS</h4>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.user}>
                            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className={styles.user__image} />
                            <div className={styles.user__info}>
                                <h5>Jane Doe</h5>
                                <small>2h ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__header}>
                        <span className={styles.tag_tag_brown}>Publicação</span>
                        <img src='https://source.unsplash.com/600x400/?puppy' alt="card__image" className={styles.card__image} width="600" />
                    </div>
                    <div className={styles.card__body}>
                        <h4>INSEMINAÇÃO ARTIFICIAL EM ÉGUAS</h4>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.user}>
                            <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className={styles.user__image} />
                            <div className={styles.user__info}>
                                <h5>Jony Doe</h5>
                                <small>Yesterday</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__header}>
                        <span className={styles.tag_tag_red}>Pesquisa Pública</span>
                        <img src='https://source.unsplash.com/600x400/?horse' alt="card__image" className={styles.card__image} width="600" />
                    </div>
                    <div className={styles.card__body}>
                        <h4>QUANTAS VEZES VOCÊ LEVA O SEU FILHOTE AO VETERINÁRIO?</h4>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.user}>
                            <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className={styles.user__image} />
                            <div className={styles.user__info}>
                                <h5>John Doe</h5>
                                <small>2d ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__header}>
                        <span className={styles.tag_tag_blue}>Artigo Científico</span>
                        <img src='https://source.unsplash.com/600x400/?lizard' alt="card__image" className={styles.card__image} width="600" />
                    </div>
                    <div className={styles.card__body}>
                        <h4>AUMENTO NA REPRODUÇÃO DE RUMINANTES</h4>
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.user}>
                            <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className={styles.user__image} />
                            <div className={styles.user__info}>
                                <h5>John Doe</h5>
                                <small>2d ago</small>
                            </div>
                        </div>
                    </div>
                </div>












                @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");


.Display {
    font-family: "Quicksand", sans-serif;
    place-items: center;
    height: 100vh;
    width: 50em;
    margin: 1.5em 0;
}

.Display>*,
.Display>*::before,
.Display>*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    gap: 2rem;
}

img {
    max-width: 100%;
    display: block;
    object-fit: cover;
}

.card {
    display: flex;
    flex-direction: column;
    width: clamp(15rem, 100%, 17rem);
    height: 15em;
    overflow: hidden;
    box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ece7e2;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);

}

.card__body {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    transform: translateY(-20px);

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
}

.card:hover {
    cursor: pointer;
}

.card:hover .card__image {
    filter: blur(8px);
    -webkit-filter: blur(8px);
    transition: opacity 0.2s linear;
}

.card:hover .card__body {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s linear;
}

.card__header {
    position: relative;
    min-height: 10vh;
}

.tag {
    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
}

.tag_tag_blue {
    float: left;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1000;
    margin: .75em .75em;

    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
    background: #56CCF2;
    background: linear-gradient(to bottom, #2F80ED, #56CCF2);
    color: #fafafa;
}

.tag_tag_brown {
    float: left;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1000;
    margin: .75em .75em;

    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
    background: #D1913C;
    background: linear-gradient(to bottom, #FFD194, #D1913C);
    color: #fafafa;
}

.tag_tag_red {
    float: left;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1000;
    margin: .75em .75em;

    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .75rem;
    background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
}

.card__body h4 {
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 0;
    margin: 3vh 0;
}

.card__footer {
    display: flex;
    padding: 0 1rem 1rem;
    margin-top: auto;
    transform: translateY(10px);
}

.card__footer h5 {
    padding: 0;
    margin: 0 2vh;
}

.user {
    margin-left: auto;
    margin-right: 0;
    text-align: center;
    display: flex;
    gap: .5rem;
}

.user__image {
    border-radius: 50%;
    max-height: 100%;
    transition: 0.5s;
}

.user__info>small {
    color: #666;
}

.section_header {
    padding: 10px;
    margin: 0;
    max-width: 50em;
    height: 10em;
}

.section_header h3 {
    padding: 0;
}