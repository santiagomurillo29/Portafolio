import React from 'react'
import FotoHTMl from '../Assets/html.png'
import FotoCSS from '../Assets/css.png'
import FotoBo from '../Assets/bootstrap.png'
import Fotoreact from '../Assets/react.png'
import FotoJS from '../Assets/js.png'
import FotoC from '../Assets/Csharp_Logo.png'
import FotoGit from '../Assets/git.png'
import FotoMySql from '../Assets/Mysql.png'
import FotoSQL from '../Assets/sql.png'

const Skill = () => {
  return (
    <div>
        <section className='skill'>
            <article className='nameSkill'>
                <h2>Skills</h2>
                <br/>
                <br/>

                <article>
                    <article className='group1'>
                        <button> <img src={FotoHTMl}/>HTML</button>
                        <button> <img src={FotoCSS}/>CSS</button>
                        <button> <img src={FotoBo}/>Bootstrap</button>
                        <button> <img src={FotoJS}/>JavaScript</button>
                    </article>
                    <span></span>
                    <article className='group2'>
                        <button> <img src={Fotoreact}/>React</button>
                        <button> <img src={FotoC}/>C#</button>
                        <button> <img src={FotoSQL}/>Sql</button>
                        <button> <img src={FotoGit}/>Git</button>
                    </article>
                </article>
            </article>
        </section>
    </div>
  )
}

export default Skill
