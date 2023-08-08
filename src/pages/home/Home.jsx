/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Profile from '../../assets/home.jpg'
import { FaArrowRight } from 'react-icons/fa'
import '../../style/home.css'

export const Home = () => {
  return (
    <section className='grid-columns grid gap-8 items-center p-8 px-16 h-screen'>
      <img src={Profile} alt="Photo Profile" className='h-5/6 object-cover rounded-3xl' />
      <div className='home__content'>
        <div className='home__data max-w-xl m-auto pt-6'>
          <h1 className='home__title text-3xl relative leading-tight pl-14 dark:text-gray-200'><span className='text-secondary block'>I'm Daniel Yataco Blas.</span> Backend Developer</h1>

          <p className='leading-loose mt-6 mb-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum omnis impedit facere in velit totam delectus minima explicabo ullam, ut quae fugit error animi, molestiae veritatis natus cupiditate perferendis.
          </p>

          <Link to={'/about'} className='button_animation overflow-hidden inline-block relative text-md border border-secondary rounded-3xl py-2 pl-4 pr-16 font-bold transition-all 0.5s ease-in-out'>
            More About Me <span className='inline-block absolute  right-0 top-0 w-10 h-full bg-secondary rounded-3xl text-white text-center px-3 py-3'> <FaArrowRight/> </span>
          </Link>

        </div>
      </div>
      <div className='fixed top-0 left-0 color__block bg-gray-200 dark:bg-secondarydark  h-full w-full'></div>
    </section>
  )
}
