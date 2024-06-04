'use client'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
function Collabchildren({children}:{children:React.ReactNode}) {
    gsap.registerPlugin(useGSAP,ScrollTrigger)
    const container = useRef(null)
    useGSAP(()=>{
        gsap.fromTo(container.current,{
            y:100,
            opacity:0,  
          },
          {
            opacity:1,
              y:0,
              duration:1,
              scrollTrigger: {
                trigger: container.current,
                start: "top bottom-=10%",
                toggleActions:  "play none none none" // onEnter, onLeave, onEnterBack, onLeaveBack
            }
          }
      )
    },{scope:container})
  return (
    <div
    ref={container}
    >{children}</div>
  )
}

export default Collabchildren