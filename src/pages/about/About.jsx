
import { FaDownload } from 'react-icons/fa'
import '../../style/about.css'
import { Info } from '../../components/Info'
import CV from '../../assets/EXAMEN_FINAL_NOCHE (1).pdf'
import { Stats } from '../../components/Stats'
import { Skills } from '../../components/Skills'

export const About = () => {
  return (
    <main className=" lg:bg-white  text-gray-400  mx-auto max-w-6xl bg-secondary">
      <section className=" about mx-auto block text-center py-28 px-2  ">
        <h2 className="section__title text-4xl sm:text-4xl lg:text-5xl font-bold pb-16 ">
          About <span>Me</span>
        </h2>
        <div className="about__container grid grid-cols-2 gap-6 text-left">
          <div className='aboute__info'>
            <h3 className='section__subtitule text-xl mb-4 '>Personal info</h3>
            <ul className='info__list grid grid-cols-2 gap-3 mb-4'>
              {/* Info */}
              <Info />
            </ul>
            <a href={CV} className='overflow-hidden inline-block relative text-md border border-secondary rounded-3xl py-2 pl-4 pr-16 font-bold transition-all duration-700 ease-in-out hover:bg-secondary hover:text-white' download=''>
              Dowland CV
              <span className='inline-block absolute  right-0 top-0 w-10 h-full bg-secondary rounded-3xl text-white text-center px-3 py-3'>
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid grid-cols-2 gap-16">
            <Stats />
          </div>
        </div>
      </section>

      <div className='border-b-2 rounded-3xl border-gray-400 w-1/2 mx-auto'></div>

      <section className='skills mt-8'>
        <h3 className='text-2xl text-center'>My Skills</h3>
        <div className='skills__container  grid grid-cols-4 gap-12 p-12 '>
          <Skills />
        </div>
      </section>

      <div className='border-b-2 rounded-3xl border-gray-400 w-1/2 mx-auto'></div>

      <section className='skills mt-8'>
      <h3 className='text-2xl text-center'>Experiencie & Education</h3>
        
      </section>

    </main>
  )
}
