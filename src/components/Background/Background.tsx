import ButtonComponent from '../ButtonMaps/Button';
import './Background.css';
import mulanImage from './image/mulan222.png';

export default function Background() {
  return (
    <div className="body">
      <img src={mulanImage} className='mulan22' alt="menu" />

      <section className='cuadro1'>
      <p className='parrafo'>Los invitamos a celebrar el cumpleaños de:</p>
      <h1 className='title'>Samantha Morúa Madríz</h1>
      <p className='parrafo'>De 1:pm a 6:30 pm</p>
      <p className='parrafo'>08|12|2024</p>
      <p className='parrafo'> V Entertaiment</p>
      <p className='parrafo'> 1 km norte de la iglesia Católica de San José de la 
        Montaña. Heredia Costa Rica</p>
      <ButtonComponent/>
      
      </section>
    
       
   
    
    
    
    
    </div>

     


    
  )
}
