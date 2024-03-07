import React from 'react'
import { alex_brush } from '@/app/fonts'
import Image from 'next/image'
import HeroLinks from './HeroLinks'
import BtnCta from '../BtnCta'


export default function Hero() {
  return (
    <div className='2xl:w-[1400px] mx-auto h-fit 2xl:h-screen pt-20 flex flex-col-reverse 2xl:flex-row place-items-center ' >
      <div className='h-fit w-4/6 mx-auto 2xl:w-full'>
        <h5 className={alex_brush.className}>
          <div className='text-5xl text-semi-dark-green'>
            Hi, my name is,
          </div>
        </h5>
        <h1 className='text-7xl font-semibold uppercase text-dark-green'>
          Wira Mahatvavirya
        </h1>
        <h2 className='text-6xl text-semi-light-green font-semibold mb-5'>
          I craft experience on the web
        </h2>
        <p className='text-melon text-3xl'>"I'm a passionate Frontend Developer specializing in Next.js, Vue.js, and React.js, based in Bandung, Indonesia."</p>
        <HeroLinks/>
        <div className='mt-10 flex gap-5'>
          <BtnCta
            invert={true}
            text="let's talk"
            url=''
          />
          <BtnCta
            invert={false}
            text="Resume"
            url=''
          />
        </div>
      </div>
      <div className="image relative">
        <Image src="/pink-triangle.png" width={200} height={500} alt='profile' className='absolute top-8  left-10 drop-shadow-xl'/>
        <Image src="/profile.png" width={500} height={500} alt='profile' className='drop-shadow-xl '/>
      </div>
    </div>
  )
}
