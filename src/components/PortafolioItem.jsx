/* eslint-disable react/prop-types */
import { useState } from 'react'
import Close from '../assets/close.svg'

// eslint-disable-next-line react/prop-types
export const PortafolioItem = ({ img, title, details }) => {

  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="animation-right portafolio__item  rounded-xl overflow-hidden cursor-pointer relative">
      <img src={img} alt={title} className="h-56 w-full object-cover align-middle" />
      <div className="portafolio__hover absolute inset-0 opacity-0 grid place-items-center bg-secondary transition-all duration-700 ease hover:opacity-90" onClick={toogleModal}>
        <h3 className="portafolio__title text-white text-lg font-bold">{title}</h3>
      </div>

      {modal &&
        <div className="portafolio__modal">
          <div className="portafolio__modal__content bg-gray-100 max-w-2xl p-8 relative rounded-xl 
          dark:bg-gray-800
          ">
            <img src={Close} alt='' className="modal__close w-8 h-8 bg-secondary hover:bg-red-700 rounded-full absolute  transition-all duration-500 ease" 
            onClick={toogleModal} 
            />
            <h3 className="modal__title text-center text-secondary text-3xl tracking-widest mb-6">{title}</h3>
            <ul className="modal__list grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {details.map(({ icon, title, desc }, index) => (
                <li className='flex items-center gap-2' key={index}>
                  <span className='item__icon flex'>{icon}</span>
                  <div>
                    <span className="item__title text-gray-500 dark:text-gray-400">{title}</span>
                    <span className='text-gray-500"'>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt={title} className='w-full  lg:h-96 rounded-md' />
          </div>
        </div>
      }

    </div>
  )
}
