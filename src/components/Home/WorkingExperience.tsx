'use client'
import React, { useState, useEffect, useRef } from 'react'
import workingData, { working } from "../../app/data/workingData"
import moment from 'moment'
import Image from 'next/image'
import { motion } from "framer-motion"
import { url } from 'inspector'

function WorkingExperience() {
    const [active, setActive] = useState<number>(0)
    const workingRef = useRef(null)
    const [workingVisible, setWorkingVisible] = useState<boolean>(false)

    useEffect(()=>{
        if(!workingVisible){
            const observer = new IntersectionObserver((entries:any) => {
                const entry = entries[0]
                if(entry.isIntersecting){
                    console.log(entry)
                    setWorkingVisible(true)
                }
            })
            if(workingRef.current){
                observer.observe(workingRef.current)
            }
        }
    },[])
    return (
        <div className='py-24 w-screen bg-light-green' style={{backgroundImage : 'url("/work-bg.png")', backgroundSize : 'cover', backgroundRepeat : 'no-repeat', width: "100%"}}>
            <motion.div 
            initial={{y : -20, opacity: 0}}
            animate={workingVisible?{y:0, opacity : 1} : {}}
            transition={{duration : .5, ease: "easeIn"}}
            className='grid grid-cols-12 h-fit w-4/6 mx-auto 2xl:w-[1400px]'>
                <div className='col-span-1 h-full overflow-y-hidden flex items-start justify-end'>
                    <div className='w-1 h-full bg-dark-green'>
                        {/* lines */}
                    </div>
                    <div className=''>
                        {/* slider */}
                        <div className='w-2 rounded-tr-xl rounded-br-xl transition-all ease-in-out duration-300 delay-100' style={active > 0 ? { height: (active * 64) + (12 * active) } : { height: 0 }}>

                        </div>
                        {/* indicator */}
                        <div className='w-1 h-16 bg-dark-green rounded-tr-xl rounded-br-xl'></div>
                    </div>
                </div>
                <div className='flex flex-col col-span-3 max-w-96 gap-3'>
                    {workingData.map((data: working, index: number) => (
                        <button key={"--company-" + index} className={
                            `h-16 full text-left px-3 text-xl flex justify-between items-center relative wrk-btn hover:text-light-green ${active === index ? "bg-semi-dark-green text-light-green" : ""} ${index !== 8 ? "border-b border-semi-dark-green" : ""
                            }`}
                            onClick={() => setActive(index)}
                        >
                            {active !== index && <div className='bcg absolute top-0 bottom-0 left-0 right-0 w-0 h-full bg-semi-dark-green main-transition'></div>}
                            <div className='z-10'>
                                {data.company}
                            </div>
                            {index === active && <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .3 }}
                            >
                                <Image src={"/bullet-triangle.svg"} width={0} height={0} alt='arrow' className='drop-shadow-xl drop-shadow-black w-6 h-auto' />
                            </motion.div>}
                            
                        </button>
                    ))}
                </div>
                <div className='col-span-8 ml-16'>
                    <h3 className='text-3xl font-semibold'>
                        {workingData[active].position}
                    </h3>
                    {workingData[active].workingTime && <h5>
                        {moment(workingData[active].workingTime[0], "M-D-YYYY").format("MMM, D YYYY")} - {moment(workingData[active].workingTime[1], "M-D-YYYY").format("MMM, D YYYY")}
                    </h5>}
                    {!workingData[active].workingTime && <div> - </div>}
                    <div className='flex flex-col gap-7 mt-10'>
                        {workingData[active].achievement.map((acc: string, index: number) => (
                            <motion.div className='flex gap-5 items-start' key={workingData[active].company+"--"+index}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: .3, delay: (index * .3) }}
                            >
                                <div className='w-2 h-fit shrink-0 pt-2'>
                                    <Image src={"/bullet.svg"} width={0} height={0} alt='triangle' className='w-3 h-2'/>
                                </div>
                                <div>
                                    {acc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            {/* trigger */}
            <div ref={workingRef}>

            </div>
        </div>
    )
}

export default WorkingExperience