import styles from '../../styles/StaffCard/StaffCard.module.scss'

function PersonCard(props) {
    return (
        <>
            <div className={styles.person}>
                <div className={styles.StaffCard}>
                    <img className={styles.cropped_image} src={props.photo} alt="" />
                </div>
                <div className={styles.info}>
                    <h1>{props.name}</h1>
                    <span>{props.title}</span>
                </div>
            </div>
        </>
    )
}

export default PersonCard