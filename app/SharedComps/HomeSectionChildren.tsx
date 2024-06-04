'use client'
import React, { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
function HomeSectionchild({children}:{children:React.ReactNode}) {
  gsap.registerPlugin(useGSAP)
  const container = useRef(null)
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.fromTo(container.current,
      {
        background:"#4de5a8",
        opacity:1,
        width:300,
        duration:1,
      },
      {
        opacity:1,
        width:50,
        duration:1,
      }
    )
  },{scope:container})
  return (
    <div ref={container}>{children} </div>
  )
}

export default HomeSectionchild