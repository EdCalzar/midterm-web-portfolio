import { Link } from 'react-scroll'
import Profile from '../assets/profile_formal.png'
import { MapPin } from 'lucide-react';

export default function HomeSection() {
  return (
    <>
      <div id="home" className='w-full h-screen flex justify-center p-16 md:flex-row'>
          <div className='flex flex-col gap-10 items-center mt-20 md:mt-28 md:flex-row lg:flex-row lg:gap-60 lg:mt-0'>
          <img
            src={Profile}
            className="w-48 h-48 md:w-70 md:h-70 rounded-full object-cover"
            alt="Profile"
          />
          <div className='flex flex-col gap-5'>
            <h1 className='text-green-300 text-xl md:text-2xl font-medium mb-2 md:flex flex col'>Hello, Welcome!</h1>
            <h1 className='text-white text-4xl md:text-6xl font-bold'>
              I'm Edrick Calzar.
            </h1>
            <p className='text-white text-justify md:w-xl'>A 3rd-year student currently pursuing a course in Computer Science who's eager to learn and passionate about <b>Web Development</b> and <b>Digital Innovation</b>.</p>
            <p className='md:my-2 text-white font-medium flex items-center gap-2'><MapPin size={25}/> Based in the Philippines</p>
            <Link to='project' smooth={true} duration={300}>
              <button className='text-white w-32 border border-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 font-medium'>View Works</button>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}



