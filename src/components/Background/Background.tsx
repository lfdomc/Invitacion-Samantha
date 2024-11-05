import ButtonComponent from '../ButtonMaps/Button';
import './Background.css';
import mulanImage from './image/mulan33.png';
import dragoImage from './image/dragon.png';
import grilloImage from './image/grillo.png';
import logoImage from './image/nombre.png';
import divisionImage from './image/division.png';
import "./ZoomCounter.css";
import { useEffect, useState } from 'react';

export default function Background() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsZoomed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsZoomed2(true), 1950);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsZoomed3(true), 2050);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='body-total'>
      <div className="falling-leaves">
        {/* Puedes agregar más hojas aquí si lo deseas */}
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
      
      <section className="body">
        <img src={mulanImage} className={`mulan22 ${isZoomed ? 'zoomed' : ''}`} alt="mulan" />
        <section className={`cuadro1 ${isZoomed ? 'zoomed' : ''}`}>
          <p className='parrafo1'>Los invitamos a celebrar el cumpleaños de:</p>
          <p className='fecha'>7 Años</p>
          <h1 className='title'>Samantha Morúa Madríz</h1>
          <p className={`fecha ${isZoomed2 ? 'zoomed' : ''}`}>08|12|2024</p>
          <p className='parrafo'>De 1:pm a 7:30 pm</p>
          <p className='parrafo'> Dirección: V Entertaiment</p>
          <p className='parrafotext'>1 km norte de la iglesia Católica de San José de la Montaña. Heredia Costa Rica</p>
          <p className='parrafotext'>Recuerden traer Abrigo!!</p>
        </section>
      </section>
      
      <img src={divisionImage} className='division' alt="grillo" />
      <section className='cuadro-dragon'>
        <img src={grilloImage} className={`grillo ${isZoomed3 ? 'zoomed' : ''}`} alt="grillo" />
        <ButtonComponent />
        <img src={dragoImage} className={`dragon ${isZoomed3 ? 'zoomed' : ''}`} alt="dragon" />
      </section>
      <img src={logoImage} className='logo' alt="dragon" />
    </div>
  );
}
