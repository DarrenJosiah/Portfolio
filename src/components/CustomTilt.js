import { Tilt } from 'react-tilt'
          
export default function CustomTilt({projectTitle, projectDescription, projectTags}) {
  return (
    <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
        className="mb-8 opacity-70 hover:opacity-100 cursor-crosshair bg-gray-500 text-white p-5 rounded-2xl max-w-xs w-full shadow-xl shadow-black hover:text-green-400 hover:shadow-xl hover:shadow-green-400"
        >
        {/* Title */}
        <div className='relative w-full mb-4 text-2xl font-semibold'>{projectTitle}</div>
        
        {/* Description */}
        <p className='text-sm'>{projectDescription}</p>
        
        {/* Tags */}
        <div class="pt-7">
          { projectTags.map((tag) => {
            return (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span> 
              )
            })
          }
        </div>
        
        {/* Link */}
        {/* <a href='http://blueticks.onrender.com/' target="_blank">blueticks.onrender.com/</a> */}
    </Tilt>
  )
}