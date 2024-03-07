'use client'

import React, {useState, useEffect, useRef} from 'react'
import Heading from '../Heading'
import Image from 'next/image'
import SkillsCarousel from './SkillsCarousel'
import {motion} from "framer-motion"


function AboutMe() {
  const texts = [
    "I am a <b>frontend developer and UI/UX designer</b> based in <b>Bandung, Indonesia</b>, specializing in crafting unique and modern web applications. With <b>three years of experience as a freelance frontend developer and one year working at tekape, and another year at Analisa.io</b>, where I also managed sub-projects for <b>voxen.ai, Hawklab.ai, Crossbow.com, and Figurati-capital.com</b>, I am confident in handling diverse frontend development tasks and projects.",
    "Leveraging my expertise in frontend development and UI/UX design, I thrive on transforming concepts into visually appealing and <b>user-friendly interfaces</b>. My passion lies in understanding user behavior and integrating intuitive designs with seamless functionality. Through <b>meticulous attention to detail and continuous learning</b>, I stay updated with the latest trends and technologies to deliver cutting-edge solutions tailored to meet client needs.",
    "As a proactive collaborator, <b>I excel in working closely with cross-functional teams to conceptualize, iterate, and implement designs that exceed expectations</b>. Whether it's collaborating with stakeholders to define project goals or collaborating with backend developers to ensure seamless integration, I prioritize <b>effective communication and teamwork</b> to achieve project success. My dedication to delivering high-quality results, combined with my strong problem-solving skills, enables me to tackle challenges head-on and deliver solutions that resonate with end-users."
  ]
  const images = [
    "/crossbow.png",
    "/voxen.png"
  ]

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const myRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries:any) => {
      const entry = entries[0]
      if(entry.isIntersecting){
        setIsVisible(true)
      }
      // console.log(entry.isIntersecting)
    })

    if(myRef.current){
      observer.observe(myRef.current)
    }

  },[])

  

  return (
    <div className='py-24 w-screen bg-dark-green relative' style={{backgroundImage : 'url("/about-bg.png")'}}>
      <SkillsCarousel/>
      <div
      className='mx-auto 2xl:w-[1400px]'>
        {/* <Heading text={"about me"} dark={true}/> */}
        <div className='grid grid-cols-2 place-items-center gap-10'>
          <div className='flex gap-10 flex-col col-span-1' >
            {texts.map((text: string, index: number) => (
              <motion.div
              initial={{opacity: 0, y:-15}}
              animate={isVisible? {opacity : 1, y: 0} : {opacity : 0, y : -5}}
              transition={{duration : .5, ease : "easeIn", delay: (index*0.5)+1}}
              key={"--text-" + index} dangerouslySetInnerHTML={{ __html: text }} className='text-semi-light-green text-xl' id={"about-para-"+index}>

              </motion.div>
            ))}
          </div>
          <div className='col-span-1 flex flex-col gap-7' ref={myRef}>
            {images.map((image: string, index: number) => (
              <motion.div 
              initial={{opacity: 0, x: index === 1 ? -15 : -75 }}
              animate={isVisible? {opacity : 1, x : index === 1? 60:0} : {}}
              transition={{duration : .5, ease : "easeIn", delay: (index*0.1)+1}}
              key={"--imagea-" + index} className={`border-4 overflow-hidden rounded-xl shadow-xl border-semi-light-green `}>
                <Image src={image} width={1000} height={300} alt={image} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe