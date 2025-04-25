import './App.css';
import './styles.css';
import LongitudForm from './components/LongitudForm';
import PesoForm from './components/PesoForm';
import TemperaturaForm from './components/TemperaturaForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Conversor de Unidades</h1>
      <LongitudForm />
      <hr />
      <PesoForm />
      <hr />
      <TemperaturaForm />
    </div>
  );
}

export default App;