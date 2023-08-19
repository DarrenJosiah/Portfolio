import { Tilt } from 'react-tilt'

export default function CustomTilt({projectTitle, projectDescription, projectTags, projectIcon, projectPreview1, projectPreview2}) {
  return (
    <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
        className="px-8 mb-8 opacity-70 hover:opacity-100 cursor-crosshair bg-gray-500 text-white p-5 rounded-2xl max-w-sm sm:max-w-xs w-full shadow-xl shadow-black hover:text-green-400 hover:shadow-xl hover:shadow-green-400"
        >
        
        {/* TODO
          Tailwind - Preview slideshow on Hover */}

        {/* Heading */}
        <div className='mb-4 flex justify-center items-center'>
          {/* Icon */}
          <img src={projectIcon} alt={projectIcon} className='h-[6vh] rounded-2xl'/>
          {/* Title */}
          <p className='ms-2 text-2xl font-semibold'>{projectTitle}</p>
        </div>
        
        {/* Description */}
        <p className='text-xs'>{projectDescription}</p>

      {/* TODO */}
        {/* Preview */}
        <img src={projectPreview1} alt={projectPreview1} className='h-[6vh] rounded-2xl'/>
        
        {/* Tags */}
        <div class="pt-7">
          { projectTags.map((tag) => {
            return (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
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