import React from 'react'
import { navItems } from '../utils/utils'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

function Navbar () {
  return (
    <div className='flex flex-row justify-between items-center gap-6  px-3 md:px-5 pt-3 md:pt-4  overflow-hidden  md:max-w-[80%] mx-auto'>
       <div className="w-[36] font-inter font-medium text-primary relative ">
        {/* <div className='bg-[#d5f3f1] blur-3xl filter aspect-square absolute  w-full -z-20'/> */}
       <h2 className=" font-inter font-[600] text-[40px] leading-[30px]  text-[#54BD95] ">
        Focusio
       </h2>
       </div>
       <div className=' gap-5  text-[#191A15] md:flex hidden'>
        {
            navItems.map((items,index)=>{
                return (
                    <Link key={index} href={items.link} className='hover:underline font-semibold'>
                    {items.name}
                    </Link>
                )
            })
        }
       </div>
        <div className='gap-4 flex '>
           <Button variant="outline">Login</Button>
           <Button className='bg-[#54BD95] hover:bg-[#59b994]'>Signup</Button> 
        </div>
    </div>
  )
}

export default Navbar
