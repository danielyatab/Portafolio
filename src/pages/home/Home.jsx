/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Profile from '../../assets/home.jpg'
import { FaArrowRight } from 'react-icons/fa'
import '../../style/home.css'



export const Home = () => {
  return (
    <section className='grid-cols-1  grid-columns grid gap-8  sm:grid-cols-2  items-center p-8 px-16 h-screen'>
      <img src={Profile} alt="Photo Profile" className='animation-left m-auto w-80 h-80 rounded-full  object-cover 
                                                        sm:rounded-3xl 
                                                        sm:h-3/5
                                                        lg:h-5/6 sm:w-full' />
      <div className=' home__content'>
        <div className='animation-top home__data max-w-xl sm:m-auto sm:pt-6 '>
          <h1 className='home__title text-2xl lg:text-3xl relative leading-tight pl-14 dark:text-gray-200'>
            <span className='text-secondary block'>I'm  
              <span> Daniel Yataco Blas.</span>
            </span>
            Backend Developer</h1>

          <p className='animation-left text-sm lg:text-lg  leading-loose mt-6 mb-12 text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum omnis impedit facere in velit totam delectus minima explicabo ullam, ut quae fugit error animi, molestiae veritatis natus cupiditate perferendis.
          </p>

          <Link to={'/about'} className='animation-top button_animation overflow-hidden inline-block relative text-xs sm:text-sm lg:text-lg border border-secondary rounded-3xl py-2 pl-4 pr-16 font-bold transition-all 0.5s ease-in-out text-center mb-12'>
            More About Me <span className='inline-block absolute  right-0 top-0 w-10 h-full bg-secondary rounded-3xl text-white text-center px-3 py-3'> <FaArrowRight/> </span>
          </Link>

        </div>
      </div>
    </section>
  )
}
