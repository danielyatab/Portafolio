import { skills } from "../data"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  return (
    <>
      {
        skills.map(({title, percentage}, index) => (
          <div className="progress__box w-1/2 mx-auto" key ={index}>
            <CircularProgressbar strokeWidth={3.5} text={`${percentage}%`} value={percentage}
            />
            <h3 className="skills__title text-center pt-2 text-md text-gray-400">{title}</h3>
          </div>
        ))
      }
    </>
  )
}
