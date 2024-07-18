"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import events from "../../current_events.json"
import { Card, CardHeader } from "./ui/card";
import { Carousel,CarouselContent,CarouselItem } from './ui/carousel';


const Carousel_Custom = () => {
    return (
        <>
            <div className=' flex gap-2 items-center mx-8 mt-12 mb-4 md:mb-6'>
                <div className="bg-gradient-to-br from-gray-300 to-slate-700 w-2 h-7">
                </div>
                <h1 className={'text-3xl md:text-4xl font-bold '}>
                    EVENTS
                </h1>
            </div>
            <main className=' flex h-full  justify-center px-4 py-3'>
                <div className="bg-gray-500 mr-20 w-full h-screen my-4 ml-4 hidden lg:block">
                    {/* stats */}
                </div>
                <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full items-center max-w-lg">
                    <CarouselContent>
                        {
                            events.map((event, i) => (
                                <CarouselItem key={i}>
                                    <div className="">
                                        <Card className=" my-4 items-center text-center flex flex-col justify-start">
                                            <CardHeader>
                                                <img className="w-full h-full rounded-lg" src={event.image} alt="Event_image" />
                                            </CardHeader>
                                        </Card>

                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>

                <div className="bg-gray-500 ml-20 my-4 mr-4 hidden lg:block w-full h-screen">
                    {/* {stats} */}
                </div>
            </main>
        </>
    )
}

export default Carousel_Custom
