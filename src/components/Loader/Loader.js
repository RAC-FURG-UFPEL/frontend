import Loading from '../../images/Loader.svg'
import styles from '../../styles/Loader/Loader.module.scss'

function Loader(){
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={Loading} alt="Loading" />
        </div>
    )
}

export default Loader