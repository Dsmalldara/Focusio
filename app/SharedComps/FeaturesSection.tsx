import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

  const images =[
    {
      image:"/Features-analytics.png",
      alt:"analytics features",
      text:"Collaboration Teams",
      content:"Here you can handle projects together with team virtually"
    },
    {
      image:"/Features-cloud.png",
      alt:"cloud features",
      text:"Cloud Storage",
      content:"No need to worry about storage because we provide storage up to 2 TB"
    },
    {
      image:"/Features-collaboration.png",
      alt:"feature collaboration",
      text:"Daily Analytics",
      content:"We always provide useful information to make it easier for you every day"
    },
  ]
function FeaturesSection() {
  return (
   <section>
    <div className=" flex flex-col md:flex-row gap-[2rem] mt-[1.5em]">
      <div className="flex ">
      <h1 className=' text-3xl md:text-5xl font-bold md:w-full w-[80%] mx-auto'>
      Our Features you can get
      </h1>
      </div>
     <p className='text-xl flex-wrap w-[90%] mx-auto  text-slate-500 '>
     We offer a variety of interesting features that you can help increase yor productivity at work and manage your project essay
     </p>
      <div className="  flex items-center justify-center">
      <Button className='bg-[#54BD95] hover:bg-[#59b994] rounded-2xl px-3 py-5 shadow-md  text-[0.95rem]' >Get Started</Button> 
      </div>
      </div>
        <div className="grid grid-rows-[auto_auto_auto_auto]   md:grid-cols-3 gap-8 mt-[5rem] ">
          {
            images.map((img,i)=>{
              return(
                <div key={i} className='grid'>
                  <img src={img.image} alt={img.alt} className='h-[25rem] w-[20rem] mx-auto'/>
                  <h1 className="mt-2 text-xl font-bold md:ml-2 md:text-start items-center justify-center flex md:items-start md:justify-start">
                    {img.text}
                  </h1>
                  <p className='text-slate-500 md:w-full w-[60%] mx-auto'>
                    {img.content}
                  </p>
                  </div>
              )
            })
          }
      </div>    
   </section>
  )
}

export default FeaturesSection