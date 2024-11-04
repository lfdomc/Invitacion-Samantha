import { useState } from 'react'
import  './Header.css'
import imageMenu from './image/menu-blanco.png'

 
export const Header = () => {

    const [menu, setMenu] = useState(false);
    const toggleMenu =() =>{
        setMenu(!menu);

    }

  return (
    <div >
        
        <header className="Header1">
                <button 
                    onClick={toggleMenu}
                    className='Header-button'>
                    <img src={imageMenu} className='Header-svg' alt="menu" />

                </button>
                
                <h1 className="Header-h1">
                <a href="#" className='Header-a'> Fiesta 8 de Diciembre 2024</a>
                </h1>
                
                
                <nav className={`Header-nav  ${ menu? 'isActive': ''}`} >
                    <ul className='Header-ul'>
                        <li className="Header-li"><a href="https://www.google.com/maps?gs_lcrp=EgZ
                        jaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIICA
                        MQABgHGB4yCAgEEAAYBxgeMggIBRAAGAcYHjIICAYQABgHGB4yCAgHEAAYBxgeMggICBAAGAcYHj
                        IGCAkQRRhA0gEINzU1NGoxajeoAgiwAgE&um=1&ie=UTF-8&fb=1&gl=cr&sa=X&geocode=KQvX
                        UTSw8aCPMaaUvzCEN1g7&daddr=114+Heredia,+Heredia,+Barva" className="Header-a">Dirección</a></li>
                        
                       
                    </ul>

                </nav>
        </header>
        
    </div>
  )
}
