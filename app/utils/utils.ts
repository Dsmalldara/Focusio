
  interface navItemsInterface {
    name:string;
    link:string;
  }

 export const navItems:navItemsInterface[] = [
    {
        name:"Home",
        link:"/"
    },{
        name:"Product",
        link:"/product"
    },
    {
        name:"FAQ",
        link:'/faq'
    },
    {
        name:"Blog",
        link:"/blog"
    },
    {
        name:"About us",
        link:"/about-us"
    }
 ]
export  const benefits_subitems = [
    {
      name:"Free Consulting With Experts",
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

 export  const imagess =[
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

export   const  images = [
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
export const productDetails = [
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
export const ratings = [
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