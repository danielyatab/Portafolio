import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import '../../style/contact.css'

export const Contact = () => {
  return (
    <section className="container mx-auto  p-16 max-w-6xl ">
      <h2 className="animation-top text-5xl text-center mb-10 lg:mb-40 dark:text-white">Get in <span className="text-secondary">Touch</span>
      </h2>

      <div className="contact__container grid sm:grid-cols-1 sm:grid-rows-1 gap-16">
        <div className='contact__data'>
          <h3 className='text-2xl mb-4 dark:text-gray-300'>Dont be Shy!</h3>
          <p className='text-sm mb-5 font-normal dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim minima non sequi asperiores modi, architecto corrupti aliquam necessitatibus, eligendi suscipit sint nostrum vel expedita unde porro facere accusantium temporibus earum.</p>
          <div className='contact__info mb-5 text-sm'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__tile font-normal'>Mail me</span>
                <h4 className='font-bold dark:text-gray-300'>ingyatacoblas@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__tile font-normal'>Call me</span>
                <h4 className='font-bold dark:text-gray-300'>+51 92872813</h4>
              </div>
            </div>
          </div>

          <div className="container__social">
            <a href="https://facebook.com" className="contact__social-icon inline-block">
              <FaFacebookF />
            </a>

            <a href="https://facebook.com" className="contact__social-icon inline-block">
              <FaTwitter />
            </a>

            <a href="https://facebook.com" className="contact__social-icon inline-block">
              <FaYoutube />
            </a>

            <a href="https://facebook.com" className="contact__social-icon inline-block">
              < FaDribbble />
            </a>

            <a href="https://facebook.com" className="contact__social-icon inline-block">
              <FiSend />
            </a>
          </div>

        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">

            <div className="form__input-div">
              <input
                type="text"
                placeholder='Your name'
                className='form__control dark:bg-gray-800 dark:text-white'
                required />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder='Your email'
                className='form__control dark:bg-gray-800 dark:text-white'
                required />
            </div>

            <div className="form__input-div sm:col-span-2">
              <input
                type="text"
                placeholder='Your subject'
                className='form__control dark:bg-gray-800 dark:text-white'
              />
            </div>

          </div>

          <div className='form__input_div'>
            <textarea
              placeholder='Your Message'
              className='form__control dark:bg-gray-800 dark:text-white textarea mb-4'>
            </textarea>
          </div>

          <button className='button_animation overflow-hidden inline-block relative text-md  rounded-3xl py-2 pl-4 pr-16 font-bold transition-all 0.5s ease-in-out border border-secondary'>
            Send Message
            <span className='button__icon contact__button-icon inline-block absolute  right-0 top-0 w-10 h-full bg-secondary rounded-3xl text-white text-center px-3 py-3'>
              <FiSend />
            </span>
          </button>

        </form>
      </div>
    </section>
  )
}
