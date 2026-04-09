import './ResultAlert.css';

export const ResultAlert = ({ error, result }) => {
  if (error) {
    return (
      <div className="alert-container">
        <div className="alert-box alert-error">
          <div className="alert-header">
            <span className="alert-status status-error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              Fallo de Procesamiento
            </span>
          </div>
          <div className="analysis-content">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="alert-container">
        <div className="alert-box alert-success">
          <div className="alert-header">
            <span className="alert-status status-success">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Triaje Completado
            </span>
            <span className="trace-id">{result.traceId}</span>
          </div>
          
          <div className="analysis-content">
            <p><span className="analysis-label">Respuesta del Agente:</span> {result.message}</p>
            
            {result.analysis && (
              <div style={{ marginTop: '1.5rem' }}>
                <p>
                  <span className="analysis-label">Severidad Detectada:</span> 
                  <span className="severity-badge">{result.analysis.severity}</span>
                </p>
                <p>
                  <span className="analysis-label">Diagnóstico Inicial:</span> 
                  {result.analysis.summary}
                </p>
                <p>
                  <span className="analysis-label">Plan de Acción:</span> 
                  {result.analysis.suggestedAction}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};