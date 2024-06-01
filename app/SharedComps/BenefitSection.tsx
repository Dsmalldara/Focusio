import React from 'react'
  const benefits_subitems = [
    {
      name:"Free Consulting With Experts about Saving Money",
    },{
        name:"Online Banking"
    },
    {
        name:"Investment Report Every Month"
    },
    {
        name:"Saving Money For The Future"
    },
    {
        name:"Online Transaction"
    }
  ]
function BenefitSection() {
  return (
    <div className='grid grid-rows md:grid-cols-2 gap-5 grid-rows-[auto_auto_auto_auto]'>
    <div className='grid grid-rows-subgrid md:text-start mx-auto'>
        <h1 className='text-3xl font-bold'>
        What Benefit Will You Get
        </h1>
        <div className="mt-[5rem] flex gap-5 flex-col">
           {
            benefits_subitems.map((item,i)=>{
                return(
                    <div key={i} className='flex flex-row gap-3'>
                        <img src="/mark.png" alt="mark" />
                        <p className='font-bold text-slate-600'>{item.name}</p>
                        </div>
                )
            })
           }
        </div>
    </div>
    <div className='grid grid-rows-subgrid'>
    <img src="/benefits.png" alt="benefits"/>
</div>
    </div>
  )
}

export default BenefitSection