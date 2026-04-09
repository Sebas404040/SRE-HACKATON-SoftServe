import { useState } from 'react';
import axios from 'axios';
import './IncidentForm.css';

export const IncidentForm = ({ onResult, onError, onLoading }) => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) {
      onError('Por favor, ingresa una descripción del incidente.');
      return;
    }

    setIsSubmitting(true);
    onLoading(true);
    onError(null);
    onResult(null);

    const formData = new FormData();
    formData.append('description', description);
    if (file) formData.append('evidence', file);

    try {
      const response = await axios.post('http://localhost:3001/api/incidents', formData);
      onResult(response.data);
      // Limpiar formulario tras éxito (opcional)
      setDescription('');
      setFile(null);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || 'Error de conexión con el Agente SRE';
      onError(errorMsg);
    } finally {
      setIsSubmitting(false);
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form-container">
      
      <div className="file-upload-wrapper">
        <input
          type="file"
          className="file-upload-input"
          onChange={(e) => setFile(e.target.files[0])}
          disabled={isSubmitting}
          accept=".png,.jpg,.jpeg,.txt,.log"
        />
        <div className={`file-upload-label ${file ? 'file-selected' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
          {file ? `Archivo: ${file.name}` : 'Adjuntar Evidencia (Logs/Capturas)'}
        </div>
      </div>

      <div className="chat-input-wrapper">
        <input
          type="text"
          className="chat-input"
          placeholder="Describe el problema de producción..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSubmitting}
          autoComplete="off"
        />
        <button 
          type="submit" 
          className="send-button" 
          disabled={isSubmitting || !description}
          title="Enviar al Agente SRE"
        >

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>

    </form>
  );
};

export default IncidentForm;