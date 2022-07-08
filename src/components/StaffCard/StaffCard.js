import styles from '../../styles/StaffCard/StaffCard.module.scss'
import PersonCard from './PersonCard'

function StaffCard() {
    return (
        <>
            <div className={styles.team}>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Coordenação do Projeto</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Prof. Dra. Carine Dahl Corcini"
                            title="Doutora em Biotecnologia"
                            photo="https://institucional.ufpel.edu.br/cache/imagens/989397ce1dfddd3a76733e0451a4b2c8.png"
                        />
                        <PersonCard
                            name="Prof. Dr. Antonio Sergio Varela Junior"
                            title="Doutor em Aqüicultura"
                            photo="https://publons.com/media/thumbs/academic/photos/b3f48b65-8e22-49e0-96fc-cf2657b3c99b.jpg.200x200_q95_crop_detail_upscale.jpg"
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Gestão de Palestras</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Yasmin Prado"
                            title="Graduanda em Medicina Veterinária"
                            photo="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/91134857_702836007120933_3094703217292869632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeGGE1gDtsft2FoJ9s-PdhxjFDp4iJML4N8UOniIkwvg34HJmU7tRg0mHfYqr6hZP7C42xV0AhbwQxJqOMMjQLmO&_nc_ohc=auCoDT65d5EAX85IjcH&_nc_ht=scontent-lga3-2.xx&oh=00_AT9xernHEu3cst-pHwzyOhEbkKGhnWLzm-gtjvzywdbq5g&oe=62CB6AF2"
                        />
                        <PersonCard
                            name="Júlia Castro"
                            title="Graduanda em Medicina Veterinária"
                            photo="https://st4.depositphotos.com/9998432/24360/v/950/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg?forcejpeg=true"
                        />
                        <PersonCard
                            name="Nicole"
                            title="Graduanda em Medicina Veterinária"
                            photo="https://st4.depositphotos.com/9998432/24360/v/950/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg?forcejpeg=true"
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Doutorandos</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Ma. Rita Oliveira"
                            title="Mestra em Ortopedia Veterinária"
                            photo="https://st4.depositphotos.com/9998432/24360/v/950/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg?forcejpeg=true"
                        />
                        <PersonCard
                            name="Ma. Maria Santos"
                            title="Mestra em Gestação e Nutrição Animal"
                            photo="https://st4.depositphotos.com/9998432/24360/v/950/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg?forcejpeg=true"
                        />
                        <PersonCard
                            name="Me. João Silva"
                            title="Mestre em Tecnologias Reprodutivas"
                            photo="https://st4.depositphotos.com/9998432/22597/v/950/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg?forcejpeg=true"
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_title}>
                        <span>Mestrandos</span>
                    </div>
                    <div className={styles.container}>
                        <PersonCard
                            name="Vitória Ferreira"
                            title="Médica Veterinária"
                            photo="https://st4.depositphotos.com/9998432/24360/v/950/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg?forcejpeg=true"
                        />
                        <PersonCard
                            name="Roberto Araújo"
                            title="Médico Veterinário"
                            photo="https://st4.depositphotos.com/9998432/22597/v/950/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg?forcejpeg=true"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffCard