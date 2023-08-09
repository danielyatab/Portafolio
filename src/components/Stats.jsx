import { statsInfo } from "../data"
import parse from 'html-react-parser'

export const Stats = () => {
  return (
    <>
      {statsInfo.map(({no, title}, index)=>(
        <div key={index} className="border border-gray-200 rounded-xl py-5 px-3 mx-auto w-48 dark:text-white">
          <h3 className="text-4xl font-bold text-secondary leading-tight">{no}</h3>
          <p className="stats__title text-sm relative pl-8">{parse(title)}</p>
        </div>
      ))}
    </>

  )
}
