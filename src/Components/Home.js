import React, { useEffect } from 'react'
import Foto from '../Assets/myphotopersonal.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])

  return (
    <div>
        <section id='home' className='home'>

            <article className='information'>

                <h2 className='greeting'>Hello World, i´m</h2>
                <h1 className='nameHome'>Santiago Murillo</h1>
                <h2 className='description'> <span className='machineWrite'> Full Stack Developer . </span> </h2>
                <h2 className='welcome'> Welcome to My personal website  </h2>
                <h2 className='cv'  ><a href="../Assets/SantiagoMurillo_CV.pdf" download="SantiagoMurillo_CV.pdf">CV_Santiago_Murillo</a></h2>

            </article>

            <article className='logoHome'>
                <img data-aos="fade-left" src={Foto} className='photo'/>
            </article>

        </section>
    </div>
  )
}

export default Home
