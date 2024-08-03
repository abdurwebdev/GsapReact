import React, { useRef } from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Hello = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:".section",
        start:"top 50%",
        end:"top 0%",
        scrub:1
      }
    })
      tl.from(firstRef.current,{
        x:-300,
        duration:2,
        opacity:0,
        scrub:1
      },"anim")
      tl.from(secondRef.current,{
        x:300,
        duration:2,
        opacity:0,
        scrub:1
      },"anim")
      tl.from(thirdRef.current,{
        x:-300,
        duration:2,
        opacity:0,
        scrub:1
      },"one")
      tl.from(fourthRef.current,{
        x:300,
        duration:2,
        opacity:0,
        scrub:1
      },"one")
  })
  return (
    <section className='p-10 section overflow-x-hidden'>
     <div  className='flex items-center justify-normal gap-10 gap-x-28 flex-wrap'>
      <div ref={firstRef} className='w-[45%] h-[300px]  bg-white rounded-3xl  border-b-[#000]  border-b-[20px] border-l-2 border-r-2 border-t-2 border-black'>
        <div className='flex  items-start h-44 justify-between p-4'>
          <h1 className='text-2xl text-black font-bold w-48 bg-[#BBFF62]'>Search Engine Optimization</h1>
          <img className='w-64 h-64 object-cover' src="https://static.vecteezy.com/system/resources/previews/009/335/954/non_2x/gold-microphone-broadcast-or-karaoke-3d-render-element-free-png.png" alt="" />
        </div>
        <div className='flex items-center gap-5 p-3  justify-start'>
          <button className='p-5 rounded-full bg-black text-white'><BsArrowUpRight/></button>
          <h1>Learn More</h1>
        </div>
      </div>
      <div ref={secondRef} className='w-[45%] h-[300px] border-b-[#000]  border-b-[20px] border-l-2 border-r-2 border-t-2 border-black bg-black text-white rounded-3xl'>
      <div className='flex  items-start h-44 justify-between p-4'>
          <h1 className='text-2xl text-black font-bold w-48 bg-[#fff]'>Pay per Click Advertising</h1>
          <img className='w-64 h-64 object-cover' src="https://static.vecteezy.com/system/resources/previews/009/335/954/non_2x/gold-microphone-broadcast-or-karaoke-3d-render-element-free-png.png" alt="" />
        </div>
        <div className='flex items-center gap-5 p-3  justify-start'>
          <button className='p-5 rounded-full bg-white text-black'><BsArrowUpRight/></button>
          <h1>Learn More</h1>
        </div>
      </div>
      <div ref={thirdRef} className='w-[45%] h-[300px] border-b-[#000]  border-b-[20px] border-l-2 border-r-2 border-t-2 border-white bg-black text-white rounded-3xl'>
      <div className='flex  items-start h-44 justify-between p-4'>
          <h1 className='text-2xl text-black font-bold w-48 bg-[#fff]'>Social Media Marketing</h1>
          <img className='w-64 h-64 object-cover' src="https://static.vecteezy.com/system/resources/previews/009/335/954/non_2x/gold-microphone-broadcast-or-karaoke-3d-render-element-free-png.png" alt="" />
        </div>
        <div className='flex items-center gap-5 p-3  justify-start'>
          <button className='p-5 rounded-full bg-white text-black'><BsArrowUpRight/></button>
          <h1>Learn More</h1>
        </div>
      </div>
      <div ref={fourthRef} className='w-[45%] h-[300px] border-b-[#000]  border-b-[20px] border-l-2 border-r-2 border-t-2 border-black bg-white rounded-3xl'>
      <div className='flex  items-start h-44 justify-between p-4'>
          <h1 className='text-2xl text-black font-bold w-48 bg-[#BBFF62]'>Email Marketing</h1>
          <img className='w-64 h-64 object-cover' src="https://static.vecteezy.com/system/resources/previews/009/335/954/non_2x/gold-microphone-broadcast-or-karaoke-3d-render-element-free-png.png" alt="" />
        </div>
        <div className='flex items-center gap-5 p-3  justify-start'>
          <button className='p-5 rounded-full bg-black text-white'><BsArrowUpRight/></button>
          <h1>Learn More</h1>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Hello