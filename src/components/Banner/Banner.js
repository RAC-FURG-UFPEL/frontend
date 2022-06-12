import styles from '../../styles/Banner/Banner.module.scss'

function Banner() {
    return (
        <>
            <div className={`${styles.first} ${styles.hero}`}>
                <img className={styles.hero_profile_img} src="https://img.uhdpaper.com/wallpaper/spiderman-no-way-home-movie-poster-327@1@f-preview.jpg?dl" alt="" />
                <div className={styles.hero_description_bk}>
                    <span>DESTAQUE!</span>
                </div>
                
                <div className={styles.hero_description}>
                    <p>Processo seletivo para bolsas de mestrado e doutorado aberto!</p>
                </div>
                <div className={styles.hero_date}>
                    <p>20.02.2022</p>
                </div>
                <div className={styles.hero_btn}>
                    <a href="#">Inscrição</a>
                </div>
            </div>
        </>
    )
}

export default Banner