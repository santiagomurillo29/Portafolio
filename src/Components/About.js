import React, { useEffect } from 'react'
import Foto from '../Assets/myphotopersonal.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  }, [])
  return (
    <div>
        <section id='AboutMe' className='sec1'>
          
            <article className='aboutMe'>

              <article className='text'>
                <h2>About Me ✌️</h2>
              </article>
              
              <article className='i-b'>

                <article data-aos="fade-up" className='imagen'>
                  <img src={Foto} />
                </article>

                <article data-aos="fade-left" className='bibliography '>
                  <p>I am an upright and autonomous person, easy to learn, whoalways seeks innovation and creative transformation in work environments. I enjoy taking on challenges and I adapt fluently to changes. I find it easy to work in a team and I have good interpersonal relationships.  </p> 

                  <br/>
                  <p>I have knowledge of various programming languages such as JavaScript and C#. I like to keep up-to-date and informed with new technologies, and also, I have knowledge with Git and version control to ensure effective project management. </p> 
                </article>

              </article>

            </article>
        </section>
    </div>
  )
}

export default About
