import styles from '../../styles/StaffCard/StaffCard.module.scss'
import PersonCard from './PersonCard'

function StaffCard() {
    return (
        <>
            <div className={styles.team}>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Coordenadores</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Andrew Ribeiro"
                            title="Graduando em Ciência da Computação"
                            photo="https://avatars.githubusercontent.com/u/74578220?v=4"
                        />
                        <PersonCard
                            name="Yasmin Prado"
                            title="Graduanda em Medicina Veterinária"
                            photo="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/91134857_702836007120933_3094703217292869632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeGGE1gDtsft2FoJ9s-PdhxjFDp4iJML4N8UOniIkwvg34HJmU7tRg0mHfYqr6hZP7C42xV0AhbwQxJqOMMjQLmO&_nc_ohc=auCoDT65d5EAX85IjcH&_nc_ht=scontent-lga3-2.xx&oh=00_AT9xernHEu3cst-pHwzyOhEbkKGhnWLzm-gtjvzywdbq5g&oe=62CB6AF2"
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Mestrandos</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Andrew Ribeiro"
                            title="Graduando em Ciência da Computação"
                            photo="https://avatars.githubusercontent.com/u/74578220?v=4"
                        />
                        <PersonCard
                            name="Yasmin Prado"
                            title="Graduanda em Medicina Veterinária"
                            photo="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/91134857_702836007120933_3094703217292869632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeGGE1gDtsft2FoJ9s-PdhxjFDp4iJML4N8UOniIkwvg34HJmU7tRg0mHfYqr6hZP7C42xV0AhbwQxJqOMMjQLmO&_nc_ohc=auCoDT65d5EAX85IjcH&_nc_ht=scontent-lga3-2.xx&oh=00_AT9xernHEu3cst-pHwzyOhEbkKGhnWLzm-gtjvzywdbq5g&oe=62CB6AF2"
                        />
                        <PersonCard
                            name="Andrew Ribeiro"
                            title="Graduando em Ciência da Computação"
                            photo="https://avatars.githubusercontent.com/u/74578220?v=4"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffCard