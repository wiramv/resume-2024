'use client'
import React, {useState} from 'react'
import Image from 'next/image'


export default function Logo() {
    const size = 150
    const size2 = 35
    const size3 = 43
    const [state, setstate] = useState(true)
    
    return (
        <div className='scale-[.15] w-fit flex items-end origin-top-left absolute top-3 left-10'onClick={()=> setstate(!state)}>
            <div className={state? "rotate-180 opacity-70 main-transition" : "main-transition"}>
                <Image src="triangle.svg" width={size} height={size} alt="triangle-logo"/>
            </div>
            <div className={state? "rotate-180 opacity-70 relative -translate-x-14 main-transition" : "main-transition"}>
                <Image src="triangle.svg" width={size} height={size} alt="triangle-logo"/>
            </div>
            <div className={state? "rotate-90 opacity-70 main-transition" : "main-transition"}>
                <Image src="triangle.svg" width={size} height={size} alt="triangle-logo"/>
            </div>
            <div className={state? "opacity-70 relative -translate-x-[10px] main-transition" : "main-transition"}>
                <Image src="triangle.svg" width={size} height={size} alt="triangle-logo"/>
            </div>
            <div className={state? "relative -translate-x-[350px] opacity-70 main-transition" : "main-transition"}>
                <Image src="logoI.svg" width={size3} height={size3} alt="triangle-logo"/>
            </div>
            <div className={state? "relative -translate-x-[250px] opacity-70 main-transition" : "main-transition"}>
                <Image src="circle.svg" width={size2} height={size2} alt="triangle-logo"/>
            </div>
        </div>
    )
}
