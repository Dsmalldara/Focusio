import clsx from 'clsx'
import React from 'react'

const  images = [
    {
        image:"/unsplash.png"
    },
    {
        image:"/Notion.png"
    },
    {
        image:"/Intercom.png"
    },
    {
        image:"/Descript.png"
    },{
        image:"/Grammarly.png"
    }
]
const productDetails = [
    {
        name:"Publishing",
        content:"Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your brand",
        image:"/publishing-icon.png",
    },
    {
        name:"Analytics",
        content:"Analyze your performance and create goegeous report",
        image:"/analytics-icon.png",
    },{
        name:"Engagement",
        content:"Quickly navigate and engage wih your existing and new audience",
        image:"/engagement-icon.png",
        extendedClassName:"w-[2rem] h-[2rem]"

    }
]
const ratings = [
    {
        rating: "/rating1.png",
        score:4.9,
        Tscore:5,
        text:"databricks"
    },
        {
            rating: "/rating2.png",
            score:4.8,
            Tscore:5,
            text:"Chain-analysis"
        },
    
]
function DiscoverSection() {
  return (
    <section className= " mt-[1rem] md:mt-[3rem]  md:px-0 px-6 ">
      
    <p className="text-[40px] font-[700] leading-[46px] items-center justify-center flex ">
    More than 25,000 teams use Collabs
    </p>
    <div className='flex gap-4 md:gap-6  flex-wrap mt-[2.5rem] '>
        {
            images.map((image, i) =>(
                <img src={image.image} alt={image.image}  key={i} className='object-contain '/>
            ))
        }
    </div>
    <div className="grid md:grid-rows grid-rows-[auto_auto] bg-[#fffff] md:grid-cols-2 mt-5 md:mt-[4rem] gap-8">
        <div className='gap-[3.5rem] mt-12'>
            <h3 className='text-[40px] font-[700] leading-[46px]'>
            How we support our partners all over the world 
            </h3>
            <p className="mt-4 text-xl font-[300]">
            SaaS become a common delivery model for many business application, including office software, 
            messaging software, payroll processing software, DBMS software, management software
            </p>
            <div className="md:mt-12 mt-7 gap-[3rem] md:items-start md:justify-start items-start justify-start flex">
                {
                    ratings.map((rate)=>(
                        <div>
                            <img src={rate.rating} alt="" className='w-[5rem]' />
                            <span className='flex gap-[0.125rem]'>
                                <p className='text-[0.9rem] font-bold'>{rate.score}  /</p>
                            <p className='text-[0.9rem]    font-bold mt-[0.05rem]'>{rate.Tscore}</p>
                            <p className='font-[500] text-[0.9rem] ml-2'>rating</p>
                            </span>
                            <p className='text-[0.9rem] text-slate-500 mt-[-2]'>{rate.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='gap-[3rem] flex flex-col '>
        {
            productDetails.map((product,i)=>{
                return(
                    <div  key={i} className='flex flex-row gap-3'>
                        <img src={product.image} alt={product.name}  className={clsx(product.extendedClassName ? product.extendedClassName :'w-[4rem] h-[3rem]')}/>
                     <span>
                        <p className='text-2xl font-[600] '>     {product.name}</p>
                        <p className='text-xl font-[300] '>{product.content}</p>
                    </span>
                         </div>
                )
            })
        }
        </div>
    </div>
  </section>
  )
}

export default DiscoverSection