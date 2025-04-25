import { useState } from 'react';
import axios from 'axios';

function LongitudForm() {
  const [valor, setValor] = useState('');
  const [desde, setDesde] = useState('m');
  const [hacia, setHacia] = useState('km');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const unidades = ['mm', 'cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'];

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    try {
      const res = await axios.get(`http://localhost:8080/api/longitud/convertir`, {
        params: { valor, desde, hacia }
      });
      setResultado(res.data);
    } catch (err) {
      console.error(err);
      setError('Error al convertir. Revisa los datos o el servidor.');
    }
  };

  return (
    <div>
      <h2>Conversión unidades de Longitud</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Valor"
          required
        />
        <select value={desde} onChange={(e) => setDesde(e.target.value)}>
          {unidades.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
        <span> convertir a → </span>
        <select value={hacia} onChange={(e) => setHacia(e.target.value)}>
          {unidades.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
        <button type="submit">Convertir</button>
      </form>

      {resultado !== null && (
        <p className="resultado">Resultado: {resultado} {hacia}</p>
      )}

      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LongitudForm;