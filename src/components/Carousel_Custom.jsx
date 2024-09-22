"use client"
import React, { useEffect, useState } from 'react'
import events from "../utils/current_events.json"
import { Card, CardHeader } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem,CarouselNext,CarouselPrevious, } from './ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Star } from 'lucide-react';
import { Inria_Sans, Inria_Serif } from 'next/font/google';
import axios from 'axios';

const struct = [
    { Rank: '1', Name: 'rng_58', Score: '7974' },
    { Rank: '2', Name: 'Zenith', Score: '6011' },
    { Rank: '3', Name: 'OrOrZZZ!', Score: '5833' },
    { Rank: '4', Name: 'Petr team', Score: '5792' },
    { Rank: '5', Name: 'jcvb_matthew99', Score: '5731' },
    { Rank: '6', Name: 'Excited', Score: '5403' },
    { Rank: '7', Name: 'dreamoon_love_AA', Score: '5319' },
    { Rank: '8', Name: 'step5', Score: '4951' },
    { Rank: '9', Name: 'W4yneb0t', Score: '4762' },
    { Rank: '10', Name: 'Gullesnuffs', Score: '4737' }
]
const inria = Inria_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})
const inria2 = Inria_Serif({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})


const Carousel_Custom = () => {
    const [user, setUser] = useState(struct)
    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const contestId = 1991
        const res = await axios.post('/api/fetch_user', contestId)
        setUser(res.data)
    }


    return (
        <div className='flex flex-col justify-center'>
            <div className=' flex gap-2 items-center mx-8 mt-12 mb-4 md:mb-6'>
                <div className="bg-gradient-to-br from-gray-300 to-slate-700 w-2 h-7">
                </div>
                <h1 className={'text-3xl md:text-4xl font-bold '}>
                    EVENTS
                </h1>
            </div>
            <main className=' flex h-full  justify-center px-4 py-3'>
                <div className=" mr-10 w-full h-screen my-4 ml-4 hidden lg:block">
                    <h1 className={'text-2xl mb-10 font-bold ' + (inria.className)}>Recent Contest Ranking</h1>
                    <div className='flex flex-col justify-center items-center gap-1'>

                        <div className='relative'>
                            <div className=" w-30 h-30 flex absolute rounded-full inset-0 bg-yellow-500 bg-opacity-50 filter blur-lg z-0" />
                            <Avatar className="w-24 h-24">
                                <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className={"text-lg text-center font-bold " + (inria.className)}>{user[0].Name}</h1>
                            <div className='flex gap-1 justify-center items-center z-10'>
                                <Star className='w-5 h-5 text-yellow-400' />
                                <h1 className={"font-semibold " + (inria2.className)}>{user[0].Score}</h1>
                            </div>
                        </div>


                        <div className='flex justify-around gap-40'>
                            <div className='relative'>
                                <div className=" w-30 h-30 absolute rounded-full inset-0 bg-gray-400 bg-opacity-50 filter blur-lg z-0" />
                                <Avatar className="w-24 h-24">
                                    <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className={"text-lg font-bold text-center " + (inria.className)}>{user[1].Name}</h1>
                                <div className='flex gap-1 justify-center items-center'>
                                    <Star className='w-5 h-5 text-gray-500' />
                                    <h1 className={"font-semibold " + (inria2.className)}>{user[1].Score}</h1>
                                </div>
                            </div>

                            <div className='relative'>
                                <div className=" w-30 h-30 absolute rounded-full inset-0 bg-orange-400 bg-opacity-50 filter blur-lg z-0" />
                                <Avatar className="w-24 h-24">
                                    <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className={"text-lg font-bold text-center " + (inria.className)}>{user[2].Name}</h1>
                                <div className='flex gap-1 justify-center items-center'>
                                    <Star className='w-5 h-5 text-orange-400' />
                                    <h1 className={"font-semibold " + (inria2.className)}>{user[2].Score}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col mt-10 w-full'>
                        {

                            user.map((contestant, index) => (
                                index < 3 ? null :
                                    (<div key={index} className={'border-b-2 rounded-full p-4 border-gray-500 flex w-full justify-between '+(inria2.className)}>
                                        <h1 >
                                            {contestant.Rank}
                                        </h1>
                                        <h1 className={inria.className}>
                                            {contestant.Name}
                                        </h1>
                                        <h1>
                                            {contestant.Score}
                                        </h1>
                                    </div>)
                            ))
                        }
                    </div>
                </div>
                <Carousel className="w-full justify-center items-center max-w-full">
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
                    <CarouselPrevious />
                    <CarouselNext  />
                </Carousel>

                <div className=" ml-10 my-4 mr-4 hidden lg:block w-full h-screen">
                    <h1 className={'text-2xl mb-10 font-bold ' + (inria.className)}>Overall Contest Ranking</h1>
                    <div className='flex flex-col justify-center items-center gap-1'>

                        <div className='relative'>
                            <div className=" w-30 h-30 flex absolute rounded-full inset-0 bg-yellow-500 bg-opacity-50 filter blur-lg z-0" />
                            <Avatar className="w-24 h-24">
                                <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className={"text-lg text-center font-bold " + (inria.className)}>{user[0].Name}</h1>
                            <div className='flex gap-1 justify-center items-center z-10'>
                                <Star className='w-5 h-5 text-yellow-400' />
                                <h1 className={"font-semibold " + (inria2.className)}>{user[0].Score}</h1>
                            </div>
                        </div>


                        <div className='flex justify-around gap-40'>
                            <div className='relative'>
                                <div className=" w-30 h-30 absolute rounded-full inset-0 bg-gray-400 bg-opacity-50 filter blur-lg z-0" />
                                <Avatar className="w-24 h-24">
                                    <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className={"text-lg font-bold text-center " + (inria.className)}>{user[1].Name}</h1>
                                <div className='flex gap-1 justify-center items-center'>
                                    <Star className='w-5 h-5 text-gray-500' />
                                    <h1 className={"font-semibold " + (inria2.className)}>{user[1].Score}</h1>
                                </div>
                            </div>

                            <div className='relative'>
                                <div className=" w-30 h-30 absolute rounded-full inset-0 bg-orange-400 bg-opacity-50 filter blur-lg z-0" />
                                <Avatar className="w-24 h-24">
                                    <AvatarImage className="z-10 absolute inset-0" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h1 className={"text-lg font-bold text-center " + (inria.className)}>{user[2].Name}</h1>
                                <div className='flex gap-1 justify-center items-center'>
                                    <Star className='w-5 h-5 text-orange-400' />
                                    <h1 className={"font-semibold " + (inria2.className)}>{user[2].Score}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col mt-10 w-full'>
                        {

                            user.map((contestant, index) => (
                                index < 3 ? null :
                                    (<div key={index} className={'border-b-2 rounded-full p-4 border-gray-500 flex w-full justify-between '+(inria2.className)}>
                                        <h1>
                                            {contestant.Rank}
                                        </h1>
                                        <h1 className={inria.className}>
                                            {contestant.Name}
                                        </h1>
                                        <h1>
                                            {contestant.Score}
                                        </h1>
                                    </div>)
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Carousel_Custom
