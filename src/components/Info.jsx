import { personalInfo } from "../data"

export const Info = () => {
  return (
    <>
    {personalInfo.map(({title,description}, index) => (
      <li key={index} className="my-2">
        <span className="text-gray-400 dark:text-gray-200 text-sm">{title}</span>
        <span className="text-black dark:text-white text-sm">{description}</span>
      </li>
    ))}
    </>
  )
}
