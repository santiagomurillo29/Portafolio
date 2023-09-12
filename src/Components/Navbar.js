import React from 'react'
import Foto from '../Assets/Captura_de_pantalla_2023-08-31_225841-removebg-preview.png'
import About from './About'

const Navbar = () => {
  return (
    <div>
      <section className='navbar'>
        <article className='name'>
            <h2>SANTIAGO</h2>
        </article>

        <article  className='content'>
            <ul className='list'>
                <a href='#home'><li className='li'>Home</li></a> 
                <a href='#AboutMe'><li className='li'>About</li></a>   
                <a href='#Portfolio'><li className='li'>Portfolio</li></a>  
                {/* <a href='#Cv'><li className='li'>CV</li></a>   */}
                <a href='#Footer'><li className='li'>Contact</li></a>  
            </ul>
        </article>

        <article className='logoNavbar'>
            <a href='https://github.com/santiagomurillo29' target='_blank'><img src={Foto} className='fotoNavbar'/></a>  
        </article>
      </section>
    </div>
  )
}

export default Navbar
