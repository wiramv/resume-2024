'use client'
import React, { useState } from 'react'
import skillIcons, { skiillIcn } from '@/app/data/skillsIcons'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from "framer-motion"

function SkillsCarousel() {
    const [hovered, setHovered] = useState<number | null>(null)
    
  return (
    <div className=' overflowX-hidden bg-gray-200 absolute -top-24  border-t-4 border-dark-green shadow-xl'>
        {/* container */}
        <div className='flex gap-16 px-16 h-36 items-center sliders '>
            {/* slider */}
            {skillIcons.map((skill : skiillIcn, index: number) =>(
                <Link target='_blank' href={skill.url} key={skill.name+"--"+index} className='shrink-0 hover:scale-125 main-transition relative text-nowrap' onMouseOver={()=> setHovered(index)} onMouseOut={()=> setHovered(null)}>
                    {hovered === index && <motion.div 
                    style={{ left:"-50%",     transform: 'translateX(-50%)'}}
                    initial={{y:-20, opacity : 0 }}
                    animate={{y: -15, opacity : 1}}
                    transition={{duration:.5, ease : "easeInOut"}}
                    className='absolute topping bg-dark-green text-light-green px-4 py-2 rounded-lg w-fit  mx-auto origin-center transform z-10 text-center'>
                        {skill.name}
                    </motion.div>}
                    <Image src={"/icons/"+skill.file+".svg"} width={0} height={0} alt={skill.name} className='drop-shadow h-10 w-auto'/>
                </Link>
            ))}
            {skillIcons.map((skill : skiillIcn, index: number) =>(
                <Link target='_blank' href={skill.url} key={skill.name+"--"+index} className='shrink-0 hover:scale-125 main-transition relative' onMouseOver={()=> setHovered(index)} onMouseOut={()=> setHovered(null)}>
                    {hovered === index && <motion.div 
                    style={{ left:"-50%", right : "-50%", zIndex : 10}}
                    initial={{y:-20, opacity : 0 }}
                    animate={{y: -15, opacity : 1}}
                    transition={{duration:.5, ease : "easeInOut"}}
                    className='absolute topping bg-dark-green text-light-green px-4 py-2 rounded-lg w-fit mx-auto origin-center transform'>
                        {skill.name}
                    </motion.div>}
                    <Image src={"/icons/"+skill.file+".svg"} width={0} height={0} alt={skill.name} className='drop-shadow h-10 w-auto'/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SkillsCarousel