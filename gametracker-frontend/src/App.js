import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JuegoForm from './components/JuegoForm';
import JuegoList from './components/JuegoList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/nuevo">Agregar juego</Link> | <Link to="/juegos">Ver juegos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Bienvenido a GameTracker</h2>} />
        <Route path="/nuevo" element={<JuegoForm />} />
        <Route path="/juegos" element={<JuegoList />} />
      </Routes>
    </Router>
  );
}

export default App;
