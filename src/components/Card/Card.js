import styles from '../../styles/Card/Card.module.scss'
import { MdFavoriteBorder, MdBookmarkBorder, MdOutlineModeComment } from "react-icons/md";

function Card(props) {
    return (
        <div className={styles.row}>
            <div className={`${styles.example_2} ${styles.card}`}>
                <div className={styles.wrapper} style={{ backgroundImage: `url(${props.img})` }}>
                    <div className={styles.header}>
                        <ul className={styles.menu_content}>
                            <li>
                                <a href="google.com" className={styles.fa}><MdFavoriteBorder /></a>
                            </li>
                            <li><a href="google.com" className={styles.fa}><MdBookmarkBorder /></a></li>
                            <li><a href="google.com" className={styles.fa}><MdOutlineModeComment /></a></li>
                        </ul>
                        <div className={styles.date}>
                            <span className={styles.day}>08</span>
                            <span className={styles.month}> | Junho | </span>
                            <span className={styles.year}>2022</span>
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.content}>
                            <span className={styles.author}>{props.author}</span>
                            <h1 className={styles.title}><a href="#">{props.title}</a></h1>
                            <p className={styles.text} dangerouslySetInnerHTML={{ __html: props.description }}></p>
                            <a href="#" className={styles.button}>Leia mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card