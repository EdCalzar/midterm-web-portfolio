import FigmaLogo from '../assets/figma.png'
import Github from '../assets/github_white.png'
import JavaLogo from '../assets/java.png'
import JavaScript_Logo from '../assets/js.png'
import MySQL_Logo from '../assets/mysql.png'
import PythonLogo from '../assets/python.png'
import ReactLogo from '../assets/react.png'
import HtmlLogo from '../assets/html-5.png'
import CssLogo from '../assets/css-3.png'

export default function AboutSection() {
    return (
        <div id="about" className="flex flex-col text-center md:text-start md:flex-row w-full h-auto md:h-screen p-8 md:p-16 items-start md:items-baseline gap-y-8 md:gap-x-96">
            <div className="flex flex-col gap-4 mt-28 ml-4 md:mt-28 md:ml-12">
                <h1 className="text-white text-4xl md:text-5xl font-bold uppercase mb-2 mb:mt-40">About me</h1>
                <div className="text-white text-justify md:w-xl flex flex-col gap-4">
                    <p>My learning journey focuses on improving both frontend and backend development skills to build a strong understanding of how systems work together. I enjoy experimenting with design, solving coding challenges, and turning ideas into practical solutions.</p>
                    <p>Throughout my journey, I've learned that one of my strengths is the ability to meet tight deadlines, stay composed under pressure, and confidently take the lead when working in a group.</p>
                    <p>During my free time, I like preparing for the days ahead by taking notes and breaking down projects into smaller, manageable tasks. I also enjoy playing music and have a growing enthusiasm for photography. At night, I love playing video games — it's my way of unwinding and ending the day on a good note.</p>
                    <button className="text-white w-44 p-2 border border-white rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 font-medium mt-2">Download Resume</button>
                </div>               
            </div>
                <div className="flex flex-col gap-4 max-w-5xl w-full">
                    <h1 className="text-white text-4xl md:text-5xl font-bold uppercase mt-12 md:mt-0">Technical Skills</h1>
                    <p className="text-white font-medium text-2xl">Languages</p>
                <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
                    
                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={HtmlLogo} alt="html logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>HTML</p>
                    </div>
                    
                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={CssLogo} alt="css logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>CSS</p>
                    </div>
                    
                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={JavaScript_Logo} alt="javascript logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>JavaScript</p>
                    </div>

                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={PythonLogo} alt="python logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>Python</p>
                    </div>
                    
                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={JavaLogo} alt="java logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>Java</p>
                    </div>
                    
                    <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                        <img src={MySQL_Logo} alt="python logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                        <p className='text-white text-center mb-2'>MySQL</p>
                    </div>
                    
                </div>
                    <p className="text-white font-medium text-2xl mt-8">Frameworks and Tools</p>
                    <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
                        <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                            <img src={ReactLogo} alt="react logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                            <p className='text-white text-center mb-2'>React</p>
                        </div>
                        <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                            <img src={Github} alt="react logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                            <p className='text-white text-center mb-2'>Git & GitHub</p>
                        </div>
                        <div className='p-2 border border-white w-40 h-24 md:w-48 rounded-xl transition-transform hover:bg-[#3030305b] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_4px_6px_rgba(255,255,255,0.4)]'>
                            <img src={FigmaLogo} alt="figma logo" className='w-8 h-8 md:w-8 md:h-8 mx-auto mt-3 mb-2' />
                            <p className='text-white text-center mb-2'>Figma</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}