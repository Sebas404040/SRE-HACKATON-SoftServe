import { useState } from 'react';
import { Header } from './components/Header';
import { IncidentForm } from './components/IncidentForm';
import { ResultAlert } from './components/ResultAlert';
import './index.css';

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="sre-container">
      <Header />

      <div className="main-content">
        <ResultAlert error={error} result={result} />
      </div>

      <div className="bottom-input-container">
        <IncidentForm 
          onResult={setResult} 
          onError={setError} 
        />
      </div>
    </div>
  );
}

export default App;