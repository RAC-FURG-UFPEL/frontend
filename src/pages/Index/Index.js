import Container from '../../components/Container/Container';
import Display from '../../components/Display/Display';
import Caroussel from '../../components/Caroussel/Caroussel';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';

import Login from '../User/Login';
import Admin from '../Admin/Admin';
import AboutUs from '../AboutUs/AboutUs';
import Team from '../AboutUs/Team'

import useAuth from '../../hooks/useAuth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Index() {

    const Private = ({ Item }) => {
        const signed = useAuth()

        return signed > 0 ? <Item /> : <Login />
    }

    return (
        <div>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre-nos" element={<AboutUs />} />
                <Route path="/sobre-nos/equipe" element={<Team />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default Index