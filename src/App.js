import './App.css';

import Index from './pages/Index/Index';

import Admin from './pages/Admin/Admin';
import Login from './pages/User/Login';
import Register from './pages/User/Register';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Router>

        <Routes>

          <Route path="/*" element={<Index />} />
          <Route path="/admin/*" element={<Admin />} />

          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />

        </Routes>

      </Router>

    </div>

  );
}

export default App;
