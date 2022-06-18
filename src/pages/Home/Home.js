import Container from '../../components/Container/Container';
import Display from '../../components/Display/Display';
import Caroussel from '../../components/Caroussel/Caroussel';

function Home() {

    return (
        <div>
            <Container>
                <Caroussel />
                <Display />
            </Container>
        </div>
    )
}

export default Home