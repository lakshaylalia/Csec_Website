"use client"
import React from 'react'
import { Inria_Serif } from "next/font/google";
import events from "../utils/past_events.json"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const inria = Inria_Serif({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})


const Events = () => {
    const router=useRouter()
    return (
        <div className='flex justify-center flex-col items-center'>
            <div className=' flex gap-2 items-center mx-8 mt-12 mb-4 md:mb-6'>
                <div className="bg-gradient-to-br from-gray-300 to-slate-700 w-2 h-7">
                </div>
                <h1 className={'text-3xl md:text-4xl font-bold '}>
                    CURRENT EVENTS
                </h1>
            </div>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 mx-8">
                {
                    events.map((event) => (
                        <Card key={event.event} className="md:w-[350px] w-[250px]">
                            <CardHeader className="flex justify-center items-center">
                                <CardTitle>{event.event}</CardTitle>
                                <CardDescription className={inria.className}>{event.desc}.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col">
                                <img className="w-full rounded-xl" width={150} height={100} src={event.image} alt={event.event} />
                                <div className="flex justify-between  mt-2">
                                    <p>Date </p>
                                    <p>{event.date}</p>
                                </div>

                            </CardContent>
                            <CardFooter className="flex justify-between">
                                
                                <Button onClick={()=>{
                                    router.push(`/events/${event.event}`)
                                }} className="w-full font-semibold md:text-lg text-md" variant="outline">Explore</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Events
