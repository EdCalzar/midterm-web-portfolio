import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className='bg-black/80 backdrop-blur-md w-full h-24 fixed top-0 left-0 z-50 text-white'>
            <div className='max-w-7xl mx-auto px-6 h-full flex items-center justify-between md:justify-center'>
                {/* Desktop Menu */}
                <div className='hidden md:flex gap-12 uppercase'>
                    <Link 
                        to='home' 
                        smooth={true} 
                        duration={500}
                        spy={true}
                        className='cursor-pointer hover:text-gray-300 transition-colors'
                    >
                        Home
                    </Link>
                    <Link 
                        to='about' 
                        smooth={true} 
                        duration={500}
                        spy={true}
                        className='cursor-pointer hover:text-gray-300 transition-colors'
                    >
                        About
                    </Link>
                    <Link 
                        to='project' 
                        smooth={true} 
                        duration={500}
                        spy={true}
                        className='cursor-pointer hover:text-gray-300 transition-colors'
                    >
                        Projects
                    </Link>
                    <Link 
                        to='contact' 
                        smooth={true} 
                        duration={500}
                        spy={true}
                        className='cursor-pointer hover:text-gray-300 transition-colors'
                    >
                        Contact
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button 
                    onClick={toggleMenu} 
                    className='md:hidden z-50 text-white'
                    aria-label='Toggle menu'
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`
                    fixed top-24 left-0 w-full bg-black/80 backdrop-blur-md
                    transition-all duration-300 ease-in-out md:hidden
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                    <div className='flex flex-col items-center gap-8 py-8 uppercase'>
                        <Link 
                            to='home' 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            className='cursor-pointer text-xl hover:text-gray-300 transition-colors'
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            to='about' 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            className='cursor-pointer text-xl hover:text-gray-300 transition-colors'
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                        <Link 
                            to='project' 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            className='cursor-pointer text-xl hover:text-gray-300 transition-colors'
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                        <Link 
                            to='contact' 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            className='cursor-pointer text-xl hover:text-gray-300 transition-colors'
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}