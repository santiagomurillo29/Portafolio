import React from 'react'
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Footer = () => {
  return (
    <div>
      <section id='Footer' className='Footer'>
        <article className='c-name'> <h2>Santiago <br/> Murillo <br/> Cano</h2> 
        </article>

        <article className='c-personal'> 
          <article className='esp'> <CakeIcon/> 29-10-2004 </article>
          <article> <LocationOnIcon /> Medellín, Colombia </article>
        </article>

        <article className='c-contact'> 
          <article className='esp'> <MailOutlineIcon/> smurillocano29@gmail.com </article>
          <article> <ContactPhoneIcon/> +57 3024391156 </article>
        </article>
      </section>
    </div>
  )
}

export default Footer
    
