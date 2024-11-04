import ButtonComponent from '../ButtonMaps/Button';
import './Background.css';
import mulanImage from './image/mulan33.png';
import dragoImage from './image/dragon.png'
import grilloImage from './image/grillo.png'

export default function Background() {
  return (

      <div className='body-total'>
      <section className="body">
      <img src={mulanImage} className='mulan22' alt="mulan" />
      <section className='cuadro1'>
      <p className='parrafo'>Los invitamos a celebrar el cumpleaños de:</p>
      <h1 className='title'>Samantha Morúa Madríz</h1>
      <p className='parrafo'>De 1:pm a 6:30 pm</p>
      <p className='fecha'>08|12|2024</p>
      <p className='parrafo'> V Entertaiment</p>
      <p className='parrafo'> 1 km norte de la iglesia Católica de San José de la 
        Montaña. Heredia Costa Rica</p>
      </section>

      </section>
      
        <section className='cuadro-dragon'>
        <img src={grilloImage} className='grillo' alt="mulan" />
        <ButtonComponent/>
        <img src={dragoImage} className='dragon' alt="mulan" />
        </section>
    
    </div>

     


    
  )
}
