import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProjectSection() {
    return (
        <>
            <div id="project" className="w-full min-h-screen p-24 flex flex-col items-center">
                <h1 className="text-white text-center text-4xl md:text-5xl font-bold uppercase mt-16 md:mt-16">Projects</h1>
                <p className="text-white">Testing </p>
                
                <h1 className="text-white text-center text-4xl md:text-5xl font-bold uppercase mb-8">Pictures</h1>
                <Carousel 
                    className="w-full max-w-6xl mx-auto"
                    opts={{
                        align: "start",
                        slidesToScroll: 1,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <img 
                                            src={`https://picsum.photos/seed/${index}/600/600`} 
                                            alt={`Photo ${index + 1}`}
                                            className="w-full h-full object-cover aspect-square"
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