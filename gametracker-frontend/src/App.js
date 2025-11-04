import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JuegoForm from './components/JuegoForm';
import JuegoList from './components/JuegoList';
import JuegoDetalle from './pages/JuegoDetalle';
import JuegoFormR from './components/JuegoFormR';
import ResenaList from './components/ResenaList';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#61dafb' }}>Inicio</Link>
        <Link to="/nuevo" style={{ marginRight: '1rem', color: '#61dafb' }}>Agregar juego</Link>
        <Link to="/juegos" style={{ marginRight: '1rem', color: '#61dafb' }}>Ver juegos</Link>
        <Link to="/reseñas" style={{ color: '#61dafb' }}>Reseñas</Link>
      </nav>

      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<h2>Bienvenido a GameTracker</h2>} />
          <Route path="/nuevo" element={<JuegoForm />} />
          <Route path="/juegos" element={<JuegoList />} />
          <Route path="/juego/:id" element={<JuegoDetalle />} />
          <Route path="/resenas" element={
            <>
              <JuegoFormR />
              <ResenaList />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
