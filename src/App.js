import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Team from './pages/AboutUs/Team'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre-nos" element={<AboutUs/>} />
          <Route path="/sobre-nos/equipe" element={<Team/>} />
        </Routes>

        <Footer />

      </Router>
    </div>

  );
}

export default App;
