import Container from '../../components/Container/Container';
import Display from '../../components/Display/Display';
import Caroussel from '../../components/Caroussel/Caroussel';

import styles from '../../styles/Home/Home.module.scss'

function Home() {

    return (
        <div>
            <Container>
                <Caroussel />

                <div className={styles.sub_container}>
                    <div className={styles.latest_pub}>
                        <Display qtd="3" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home