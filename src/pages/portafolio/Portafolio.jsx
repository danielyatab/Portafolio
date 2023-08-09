import '../../style/portafolio.css'
import { PortafolioItem } from '../../components/PortafolioItem'
import { PortafolioItems } from '../../data'
import { Background } from '../../components/Background'

export const Portafolio = () => {
  return (
    <section className='portafolio container mx-auto p-16 max-w-6xl'>
      <h2 className='text-5xl text-center dark:text-white'>My <span className='text-secondary'>Portafolio</span></h2>
      <div className="portafolio__container container mx-auto grid grid-cols-3 gap-8 mt-12">
        {
          PortafolioItems.map((el) => (
            <PortafolioItem key={el.id} {...el}/>
          ))          
        }
      </div>
      <Background/>
    </section>
  )
}
