import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const SeriesDiv = () => {
  const serviceRef = useRef();
  useGSAP(()=>{
    gsap.from(serviceRef.current,{
      x:-300,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:serviceRef.current,
        start:'top 50%',
        end:"top 50%",
        scrub:0.8
      }
    })
  })

  return (
    <>
      <div className="flex parent items-center gap-9 justify-center w-full h-52">
        <img
          className="w-56 h-56"
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt="Amazon Logo"
        />
        <img
          className="w-40 h-10"
          src="http://pluspng.com/img-png/dribbble-logo-png-dribbble-logos-img-5000x1230.png"
          alt="Dribbble Logo"
        />
        <img
          className="w-44 h-20"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt="Netflix Logo"
        />
        <img
          className="w-44 h-40"
          src="https://static.vecteezy.com/system/resources/previews/022/289/666/non_2x/zoom-logo-transparent-free-png.png"
          alt="Zoom Logo"
        />
        <img
          className="w-44 h-40"
          src="https://www.musicweek.com/cimages/bb9fe870fad3e9c8e46a60a0b6e338da.png"
          alt="MusicWeek Logo"
        />
        <img
          className="w-48 h-48"
          src="https://static.vecteezy.com/system/resources/previews/024/555/090/original/hubspot-logo-transparent-free-png.png"
          alt="HubSpot Logo"
        />
      </div>
      <div ref={serviceRef}  className=" flex items-center p-10 gap-10 justify-start">
        <div>
          <h1 className="font-bold text-5xl py-3 bg-[#BBFF62]">Services</h1>
        </div>
        <div className="w-[600px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quasi
            optio nemo velit quas magni nostrum, voluptatem temporibus asperiores
            sit.
          </p>
        </div>
      </div>
    </>
  );
};

export default SeriesDiv;
