import Container from '../../components/Container/Container';
import Display from '../../components/Display/Display';
import Caroussel from '../../components/Caroussel/Caroussel';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import Login from '../User/Login';
import Admin from '../Admin/Admin';
import AboutUs from '../AboutUs/AboutUs';
import Team from '../AboutUs/Team'

import useAuth from '../../hooks/useAuth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {

    const Private = ({ Item }) => {
        const signed = useAuth()

        return signed > 0 ? <Item /> : <Login />
    }

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