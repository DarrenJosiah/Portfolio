import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <div className='mt-3 mx-3 flex justify-end font-spaceGrotesk p-3 text-xs'>
        <HashLink to='#tech' smooth>
          <a className='underlining mx-6 hover:font-medium'>TECH</a>
        </HashLink>
        <HashLink to='#projects' smooth>
          <a className='underlining mx-6 hover:font-medium'>PROJECTS</a>
        </HashLink>
    </div>
  )
}