import { Inria_Sans, Inria_Serif } from 'next/font/google';
import React from 'react'

const inria = Inria_Serif({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})
const inria2 = Inria_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})

const Landing = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen font-bold'>
                <h1 className={'md:text-6xl text-5xl ' + (inria2.className)} style={{
                    textShadow: `
            0 0 5px rgba(255,255,255,0.3),
            0 0 10px rgba(255,255,255,0.2),
            0 0 15px rgba(255,255,255,0.3)
          `
                }}>TEAM</h1>
                <h1 className={'md:text-6xl text-5xl mb-8 ' + (inria2.className)} style={{
                    textShadow: `
            0 0 5px rgba(255,255,255,0.3),
            0 0 10px rgba(255,255,255,0.2),
            0 0 15px rgba(255,255,255,0.3)
          `
                }}>CSEC</h1>   
                <hr className="border border-r-white w-full max-w-2xl mb-4" style={{ width: '40%' }} />
                <p className={'md:text-2xl text-lg' + (inria2.className)}>Empowering the Future, One Code at a Time</p>
                <hr className="border border-r-white w-full max-w-2xl mt-4" style={{ width: '40%' }} />
            </div>
        </>

    );
};



export default Landing
