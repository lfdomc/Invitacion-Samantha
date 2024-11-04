import './Button.css';
const ButtonComponent: React.FC = () => {
  const handleClick = () => {
    window.open("https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEAgCEC4YChgWGB4YrwEYxwEyBggAEEUYOTIGCAEQRRhAMhAIAhAuGAoYFhgeGK8BGMcBMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgYIBxBFGEDSAQgzOTU4ajBqN6gCCLACAQ&um=1&ie=UTF-8&fb=1&gl=cr&sa=X&geocode=KQvXUTSw8aCPMaaUvzCEN1g7&daddr=114+Heredia,+Heredia,+Barva", "_blank");
  };

  return (
    <button className="maps-button" onClick={handleClick}>
      Abrir Google Maps
    </button>
  );
};

export default ButtonComponent;