import React from 'react'
import Projects1 from './Projects1'
import ImagenCrud from '../Assets/ImgCRUD.png'
import ImagenFlappy from '../Assets/ImgFlappy.png'
import ImagenFoodie from '../Assets/ImgFoodie.png'
import ImagenParamo from '../Assets/ImgParamo.png'
import ImagenRepositorio from '../Assets/Repositorio.png'
import Git from '../Assets/Captura_de_pantalla_2023-08-31_225841-removebg-preview.png'


const Portfolio = () => {
  return (
    <div>
        <section id='Portfolio' className='Portfolio'>

          <article className='Experience'>
            <h2>Past Projects Experience</h2>
          </article>

          <article className='container-projects'>
            <article className='proyectos1'>
              <Projects1 
                ImgMediaCard
                  Imagen = {ImagenRepositorio}
                  Titulo = "My personal portfolio"
                  Descripcion = "React"
                  Git = {Git}
              />,
              <Projects1 
                ImgMediaCard
                  Imagen = {ImagenFlappy}
                  Titulo = "Flappy Bird Game"
                  Descripcion = "HTML, CSS, JavaScript"
                  Git = {Git}
              />,
              <Projects1 
                ImgMediaCard
                  Imagen = {ImagenFoodie}
                  Titulo = "'FOODIE' page replica"
                  Descripcion = "HTML, CSS"
                  Git = {Git}
              />,
            </article>
          </article>

          <article className='container-projects'>
            <article className='proyectos2'>
              <Projects1 
                ImgMediaCard
                  Imagen = {ImagenParamo}
                  Titulo = "Páramo del Sol Web Page"
                  Descripcion = "HTML, CSS, Bootstrap, JavaScript"
                  Git = {Git}
              />,

              <Projects1 
                ImgMediaCard
                  Imagen = {ImagenCrud}
                  Titulo = "CRUD USER"
                  Descripcion = "C#, SQL Server"
                  Git = {Git}
              />
            </article>
          </article>

        

        </section>
    </div>
  )
}

export default Portfolio
