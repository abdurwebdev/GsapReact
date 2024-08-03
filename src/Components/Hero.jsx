import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
    const heroLeftRef = useRef();
    const imageRef = useRef();
    useGSAP(()=>{
        const tl=gsap.timeline();
        tl.from(heroLeftRef.current.children,{
            x:-100,
            opacity:0,
            stagger:0.3,
            duration:1
        })
        tl.from(imageRef.current,{
            x:100,
            opacity:0
            
        },"-=1")
    })
    
    return (
        <>
            <section className='p-10 overflow-hidden'>
                <div className='flex items-center justify-between '>
                    <div ref={heroLeftRef} className='w-[40%] flex flex-col gap-y-5'>
                        <h2 className='font-[Whyte] capitalize text-5xl'>Navigating the digital landscape for success</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam error earum voluptatem tempore odit expedita magni dolor perferendis voluptatum suscipit!</p>
                        <button class="request-button w-56 rounded-full">
                            <span>Book a Consultation</span>
                        </button>
                    </div>
                    <div  className=' flex items-center justify-end'>
                        <img ref={imageRef} className='w-[70%] h-[70%]  object-cover' src="https://ocspd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.0acb3fed.png&w=1080&q=75" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero