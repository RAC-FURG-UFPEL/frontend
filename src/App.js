import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Display />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
