import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';

import AboutUs from '../AboutUs/AboutUs';
import Team from '../AboutUs/Team';
import Articles from '../Articles/Articles';
import Unauthorized from '../Default/Unauthorized';
import NotFound from '../Default/NotFound';


import { Route, Routes } from 'react-router-dom';

function Index() {

    return (
        <div>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/publicacoes" element={<Articles />} />
                <Route path="/sobre-nos" element={<AboutUs />} />
                <Route path="/sobre-nos/equipe" element={<Team />} />

                {/* Default Pages */}
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default Index