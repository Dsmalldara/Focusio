import React from 'react'
import { benefits_subitems } from '../utils/utils'
import BenefitBulletChildren from './BenefitBulletChildren'

function BenefitSection() {
  return (
    <div className='grid grid-rows md:grid-cols-2 gap-5 grid-rows-[auto_auto_auto_auto] md:px-0 px-3'>
    <div className='grid grid-rows-subgrid md:text-start mx-auto'>
        <h1 className='text-3xl font-bold'>
        What Benefit Will You Get
        </h1>
       <BenefitBulletChildren />
    </div>
    <div className='grid grid-rows-subgrid'>
    <img src="/benefits.png" alt="benefits"/>
</div>
    </div>
  )
}

export default BenefitSection