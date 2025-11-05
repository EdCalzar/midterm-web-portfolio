import { Card, CardContent } from "@/components/ui/card"
import Bird from "../assets/bird.jpg"
import Car from "../assets/car.jpg"
import Cafe from "../assets/coffee.jpg"
import Light from "../assets/lights.jpg"
import DeadBird from "../assets/dead_bird.jpg"

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

        {/* --- PROJECT CARDS --- */}
        <div className="flex flex-col md:flex-row md:gap-x-8 md:mb-12">
          <div className="bg-white p-4 rounded-xl">
            <img src="https://placehold.co/275x175" className="md:rounded-md" />
            <p className="md:mt-4 font-bold text-2xl">Project Title</p>
            <p>Description</p>
            <div className="flex md:gap-x-2 md:mt-6">
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">HTML</p>
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">CSS</p>
            </div>
            <button className="">GitHub</button>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <img src="https://placehold.co/275x175" className="md:rounded-md" />
            <p className="md:mt-4 font-bold text-2xl">Project Title</p>
            <p>Description</p>
            <div className="flex md:gap-x-2 md:mt-6">
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">HTML</p>
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">CSS</p>
            </div>
            <button className="">GitHub</button>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <img src="https://placehold.co/275x175" className="md:rounded-md" />
            <p className="md:mt-4 font-bold text-2xl">Project Title</p>
            <p>Description</p>
            <div className="flex md:gap-x-2 md:mt-6">
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">HTML</p>
              <p className="bg-gray-300 px-4 py-1 rounded-full font-medium text-sm">CSS</p>
            </div>
            <button className="">GitHub</button>
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
