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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const Private = ({ Item }) => {
    const signed = useAuth()

    return signed > 0 ? <Item /> : <Login />
  }

  return (
    <div className="App">

      <AuthProvider>
        <Router>

          <Routes>

            <Route path="/*" element={<Index />} />

            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />

            <Route path="/admin" element={<Private Item={Admin} />} />
          </Routes>

        </Router>
      </AuthProvider>

    </div>

  );
}

export default App;
