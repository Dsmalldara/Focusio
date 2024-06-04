'use client'
import React from 'react'
import { benefits_subitems } from '../utils/utils';
function BenefitBulletChildren() {
 
  return (
    <div className="mt-[5rem] flex gap-5 flex-col" >
           {
            benefits_subitems.map((item,i)=>{
                return(
                    <div key={i} className='bullets flex flex-row gap-3'>
                        <img src="/mark.png" alt="mark" />
                        <p className='font-bold text-slate-600'>{item.name}</p>
                        </div>
                )
            })
           }
        </div>
  )
}

export default BenefitBulletChildren