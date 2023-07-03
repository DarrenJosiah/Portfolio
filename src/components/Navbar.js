export default function Navbar() {
  
  // TODO - Scroll to section with React Scroll
  // https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

  return (
    <div className='mt-3 mx-3 flex justify-end font-spaceGrotesk p-3 text-xs'>
        <a href='#tech-container' className='underlining mx-6 hover:font-medium'>TECH</a>
        <a href='#works' className='underlining mx-6 hover:font-medium'>WORKS</a>
    </div>
  )
}