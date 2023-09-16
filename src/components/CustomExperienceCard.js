export default function CustomExperienceCard({title, organisation, date, description1, description2, description3}) {
  return (
    <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
        <p className="mt-5 mb-1 text-xs sm:text-[1rem] text-gray-400">{date}</p>
        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-100">{ title }</h5>
        { organisation ? <p className="mb-3 text-xs sm:text-[1rem] text-gray-400">{organisation}</p> : null }
        { description1 ? <p className="mb-3 text-xs sm:text-[1rem] text-gray-400">{description1}</p> : null }
        { description2 ? <p className="mb-3 text-xs sm:text-[1rem] text-gray-400">{description2}</p> : null }
        { description3 ? <p className="mb-3 text-xs sm:text-[1rem] text-gray-400">{description3}</p> : null }
    </div>
  )
}