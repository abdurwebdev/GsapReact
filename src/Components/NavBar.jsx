import React, { useRef } from 'react'
import { BiSolidStar } from "react-icons/bi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const NavBar = () => {
    const logoRef = useRef();
    const linksRef = useRef();
    useGSAP(()=>{
       const tl=gsap.timeline();
       tl.from(logoRef.current,{
        y:-30,
        opacity:0,
        duration:0.5
       })
       tl.from(linksRef.current.children,{
        y:-30,
        duration:0.5,
        opacity:0,
        stagger:0.2
       })
    })
    return (
        <nav className='p-10'>
            <div id="navbar" className='flex items-center justify-between'>
                <div ref={logoRef} className='flex items-center gap-3'>
                    <BiSolidStar className='text-3xl rotate-45' />
                    <h1 className='font-bold text-3xl'>WizardZ</h1>
                </div>
                <div ref={linksRef} className='flex links gap-12 items-center justify-center'>
                    <h4>About Us</h4>
                    <h4>Services</h4>
                    <h4>Use Cases</h4>
                    <h4>Price</h4>
                    <h4>Blog</h4>
                    <button class="request-button rounded-full">
                        <span>Request a Quote</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar