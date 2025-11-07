import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"
import { ExternalLink } from 'lucide-react';
import Bird from "../assets/bird.jpg"
import Car from "../assets/car.jpg"
import Cafe from "../assets/coffee.jpg"
import Light from "../assets/lights.jpg"
import DeadBird from "../assets/dead_bird.jpg"
import LandingPage from "../assets/LandingPage.png"
import Grid from "../assets/grid.png"
import Project from "../assets/thirdYear_project.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectSection() {
  const images = [
    { src: DeadBird, alt: "Dead_bird" },
    { src: Light, alt: "Light" },
    { src: Bird, alt: "Bird" },
    { src: Car, alt: "Car" },
    { src: Cafe, alt: "Cafe" },
    
    
  ]

  return (
    <>
      <div id="project" className="w-full min-h-screen p-24 flex flex-col items-center">
        <h1 className="text-white text-center text-2xl md:text-3xl font-medium uppercase mt-12 md:mt-12">
          Projects
        </h1>
        <hr className="border-white w-14 md:w-24 my-2 md:my-4"/>
        <p className="text-white font-light w-100 md:w-full text-center mb-4">Turning designs into interactive experiences.</p>

        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8 md:mb-12">
          <div className="bg-[#0b0f0f]/10 backdrop-blur-md p-4 border border-white/10 rounded-xl w-86 flex flex-col shadow-[0_4px_8px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:scale-105">
            <img src={LandingPage} className="rounded-md" />
            <p className="text-white mt-4 font-bold text-2xl">Product Landing Page</p>
            <p className="text-white mt-1">Landing page for a gaming brand with responsive layout.</p>
            <div className="flex gap-x-2 mt-5 md:mt-10 cursor-default">
              <p className="bg-gray-300 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">HTML</p>
              <p className="bg-gray-300 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">CSS</p>
            </div>
            <div className="flex justify-center gap-2 mt-5 md:mt-0">
              <a 
                href="https://github.com/EdCalzar/calzar_finallandingpage" 
                target="_blank" 
                rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-5 py-2 cursor-pointer md:mt-4 rounded-full  bg-white/10 hover:bg-white/20  text-white border border-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out">
                <Github size={20} />
                GitHub
              </button>
              </a>
              <a 
                href="https://edcalzar.github.io/calzar_finallandingpage/" 
                target="_blank" 
                rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-5 py-2 cursor-pointer md:mt-4 rounded-full bg-white/10 hover:bg-white/20   text-white border border-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out">
                <ExternalLink size={20} />
                Live Demo
              </button>
              </a>
            </div>
          </div>

          <div className="bg-[#0b0f0f]/10 backdrop-blur-md p-4 border border-white/10 rounded-xl w-86 flex flex-col shadow-[0_4px_8px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:scale-105">
            <img src={Grid} className="rounded-md" />
            <p className="mt-4 font-bold text-2xl w-86 flex flex-col text-white">Food Gallery</p>
            <p className="mt-1 text-white">Food gallery page showcasing the use of grids.</p>
            <div className="flex gap-x-2 mt-5 md:mt-10 cursor-default">
              <p className="bg-gray-300 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">HTML</p>
              <p className="bg-gray-300 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">CSS</p>
            </div>
            <div className="flex justify-center gap-2 mt-5 md:mt-0">
              <a 
                href="https://github.com/EdCalzar/calzar_edrick_Lab_Exe"
                target="_blank" 
                rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-5 py-2 cursor-pointer md:mt-4 rounded-full bg-white/10 hover:bg-white/20   text-white border border-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out">
                <Github size={20} />
                GitHub
              </button>
              </a>
              <a 
                href="https://edcalzar.github.io/calzar_edrick_Lab_Exe/"
                target="_blank" 
                rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-5 py-2 cursor-pointer md:mt-4 rounded-full bg-white/10 hover:bg-white/20   text-white border border-white/30 backdrop-blur-sm transition-all duration-300 ease-in-out">
                <ExternalLink size={20} />
                Live Demo
              </button>
              </a>
            </div>
          </div>

          <div className="bg-[#0b0f0f]/10 backdrop-blur-md p-4 border border-white/10 rounded-xl w-86 flex flex-col shadow-[0_4px_8px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:scale-105">
            <img src={Project} className="rounded-md" />
            <p className="mt-4 font-bold text-2xl text-white">Her Voice, Her Safety</p>
            <p className="mt-1 text-white">Web application empowering women to report and track harassment securely.</p>
            <div className="flex gap-x-2 mt-5 md:mt-10 cursor-default ">
              <p className="bg-white/80 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">HTML</p>
              <p className="bg-white/80 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">CSS</p>
              <p className="bg-white/80 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">React</p>
              <p className="bg-white/80 hover:bg-white/60 transition-all duration-200 ease-in-out px-4 py-1 rounded-md font-medium text-sm">API</p>
            </div>
            <div className="flex justify-center">
              <p className="text-gray-300 font-light mt-5 italic">Note: This project is not yet deployed</p>
            </div>
          </div>  
        </div>

        {/* --- CAROUSEL --- */}
        <h1 className="text-white text-center text-2xl md:text-3xl font-medium mt-28 md:mt-32">
          PHOTO GALLERY
        </h1>
        <hr className="border-white w-14 md:w-24 my-2 md:my-4"/>
        <p className="text-white font-light mb-4">A  look through my lense.</p>
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover aspect-square duration-300 ease-in-out hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
