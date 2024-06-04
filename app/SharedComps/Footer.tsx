import React from 'react'
import { Input } from "@/components/ui/input"
function Footer() {
  return (
    <div className=' bg-slate-800  py-8 md:py-12 md:px-[5rem] px-4'>
      <div className=' grid grid-cols-[auto_auto] md:grid-cols-4 gap-12 '>
      <div className="flex gap-4 flex-col">
       <h2 className=" font-inter font-[600] text-[40px] leading-[30px]  text-[#54BD95] ">Focusio</h2>
      <p className=' text-white font-normal'>Get started and  try our product</p>
   <div className="md:w-[16rem] relative">
   <Input type="email" placeholder="Enter your email here" className='  md:rounded-3xl rounded-xl placeholder:text-sm md:px-5 px-2 md:w-[16rem] border border-slate-600 outline outline-green-200 focus:border  focus:border-green-300 '/>
    <img src="/arrow.png" alt="arrow" className='w-[2.5rem] h-[2.5rem] absolute right-0 bottom-0' />
    </div>
    </div>
    <div>
      <ul className='md:gap-5 gap3 flex flex-col    text-slate-400 font-semibold'>
        <li className='text-white'>Support</li>
        <li>Help center</li>
        <li>Account information</li>
        <li>About</li> 
        <li>Contact us</li>
      </ul> 
    </div>
    <div>
    <ul className='md:gap-5 gap-3 flex flex-col  text-slate-400 font-semibold'>
        <li className='text-white'>Help and solution</li>
        <li>Talk to support</li>
        <li>Support docs</li>
        <li>System status</li> 
        <li>Covid response</li>
      </ul> 
    </div>
    <div>
    <ul className='md:gap-5 gap-3 flex flex-col   text-slate-400 font-semibold'>
        <li className='text-white '>Product</li>
        <li>Update</li>
        <li>Security</li>
        <li>Beta test</li> 
        <li>Pricing product</li>
      </ul> 
    </div>
    </div>
    <div className="items-start justify-start flex ">
      <p className="  text-sm md:text-[1rem] text-slate-200  mt-5 md:mt-[2rem] font-semibold">
      © 2024 Biccas Inc. Copyright and rights reserved
      </p>
    </div>
      </div>
  )
}

export default Footer