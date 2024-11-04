import './Button.css';
const ButtonComponent: React.FC = () => {
  const handleClick = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <button className="maps-button" onClick={handleClick}>
      Abrir Google Maps
    </button>
  );
};

export default ButtonComponent;