import styles from '../../styles/Caroussel/Caroussel.module.scss'

function Caroussel() {
    return (
        <>
            <div className={styles.c_body}>
                <section className={styles.carousel} aria-label="Gallery">
                    <ol className={styles.carousel__viewport}>
                        <li id="carousel__slide1"
                            tabIndex="0"
                            className={styles.carousel__slide}>
                            <div className={styles.carousel__snapper}>
                                <a href="#carousel__slide4"
                                    className={styles.carousel__prev}>Go to last slide</a>
                                <a href="#carousel__slide2"
                                    className={styles.carousel__next}>Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            className={styles.carousel__slide}>
                            <div className={styles.carousel__snapper}></div>
                            <a href="#carousel__slide1"
                                className={styles.carousel__prev}>Go to previous slide</a>
                            <a href="#carousel__slide3"
                                className={styles.carousel__next}>Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            className={styles.carousel__slide}>
                            <div className={styles.carousel__snapper}></div>
                            <a href="#carousel__slide2"
                                className={styles.carousel__prev}>Go to previous slide</a>
                            <a href="#carousel__slide4"
                                className={styles.carousel__next}>Go to next slide</a>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            className={styles.carousel__slide}>
                            <div className={styles.carousel__snapper}></div>
                            <a href="#carousel__slide3"
                                className={styles.carousel__prev}>Go to previous slide</a>
                            <a href="#carousel__slide1"
                                className={styles.carousel__next}>Go to first slide</a>
                        </li>
                    </ol>
                </section>
            </div>
        </>
    )
}

export default Caroussel