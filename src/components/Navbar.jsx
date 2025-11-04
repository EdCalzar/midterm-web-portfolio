import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <div className='bg-black w-full h-24 fixed top-0 left-0 z-50 text-white flex justify-center'>
            <div className='my-auto flex gap-12 justify-center uppercase'>
            <Link to='home' smooth={true} duration={300} className='cursor-pointer'>Home</Link>
            <Link to='about' smooth={true} duration={300} className='cursor-pointer'>About</Link>
            <Link to='project' smooth={true} duration={300} className='cursor-pointer'>Projects</Link>
            <Link to='contact' smooth={true} duration={300} className='cursor-pointer'>Contact</Link>
            </div>
            {/* <div className='my-auto flex'>Connect With Me</div> */}
        </div>
    )
}