import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Team from './pages/AboutUs/Team'
import Index from './pages/Index/Index';

import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';
import Login from './pages/User/Login'
import Register from './pages/User/Register';
import Admin from './pages/Admin/Admin'

import NewArticle from './pages/Articles/NewArticle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/*" element={<Index />} />
            <Route path="/admin/*" element={<Admin />} />

            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />
        
          </Routes>

        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;
