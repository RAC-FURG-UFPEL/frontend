import styles from '../../styles/Container/Container.module.css'

function Container({children}) {

    return (

        <div className={styles.Container}>

            {children}

        </div>

    )

}

export default Container