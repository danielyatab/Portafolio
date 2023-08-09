import parse from 'html-react-parser';

// eslint-disable-next-line react/prop-types
export const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resume__item relative pl-16 mt-12">
      <div className="resume__icon absolute left-0 top-0 p-3 text-white bg-secondary w-10 h-10 text-center rounded-full">{icon}</div>
      <span className="resume__date text-xs bg-gray-200 px-2 rounded-xl text-gray-400 dark:text-gray-600">{year}</span>
      <h3 className='resume__subtitule ml-1 mt-3 dark:text-gray-300'>{parse(title)}</h3>
      <p className="resume__description ml-1 text-sm leading-tight mt-2">{desc}</p>
    </div>
  )
}
