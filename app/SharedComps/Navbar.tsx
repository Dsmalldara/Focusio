'use client'
import React from 'react'
import { navItems } from '../utils/utils'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
function Navbar () {
  const pathname = usePathname()
  return (
    <div className='px-3 md:px-5 pt-3 filter md:pt-4  py-4 overflow-hidden mx-auto z-10 left-0 top-0 backdrop-opacity-95 backdrop-blur-sm sticky  border-b border-white shadow-md'>
      <div className='flex flex-row justify-between items-center gap-6 md:max-w-[80%] mx-auto z-30'>
      <div className="w-[36] font-inter font-medium text-primary relative ">
       <h2 className=" font-inter font-[600] text-[40px] leading-[30px]  text-[#54BD95] ">
        Focusio
       </h2>
       </div>
       <div className=' gap-5  text-[#191A15] md:flex hidden'>
        {
            navItems.map((items,index)=>{
              const active = pathname === items.link
                return (
                    <Link key={index} href={items.link} className={ clsx( active && ' underline',  'font-semibold')}>
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
    </div>
  )
}

export default Navbar
