'use client'
import React, {useState, useEffect, useRef} from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { BsFillTriangleFill } from "react-icons/bs";
interface navi {
    text: string, url: string, drop: { text: string, url: string }[]
}

function Navbar() {
    let menuRef = useRef<null | HTMLDivElement>(null)
    const navi: navi[] = [
        {
            text: "case study",
            url: "#",
            drop: [
                {
                    text: "Iconic Photography",
                    url: ""
                },
                {
                    text: "Dawn Design",
                    url: ""
                },
                {
                    text: "Crossbow",
                    url: ""
                },
                {
                    text: "voxen",
                    url: ""
                }
            ]
        },
        {
            text: "experience",
            url: "#",
            drop: [
                {
                    text: "Freelance",
                    url: ""
                },
                {
                    text: "tekape",
                    url: ""
                },
                {
                    text: "analisa.io",
                    url: ""
                }
            ]
        },
        {
            text: "skills",
            url: "#",
            drop: [
                {
                    text: "es6+",
                    url: ""
                },
                {
                    "text": "css",
                    url: ""
                },
                {
                    text: "graphic design",
                    url: ""
                },
                {
                    text: "version control",
                    url: ""
                },
                {
                    text: "3d modeling",
                    url: ""
                }
            ]
        },
        {
            text: "contact",
            url: "#",
            drop: []
        },
    ]
    const [dropdown, setDropdown] = useState<null | number>(null)
    const handleToggle = (index:number) => {

        if(index < 3){
            if(dropdown === null || dropdown !== index){
                setDropdown(index)
            }else{
                setDropdown(null)
            }
        }
    }
    useEffect(()=>{
        let handler = (e:any) => {
            if(!menuRef.current?.contains(e.target)){
                setDropdown(null)
            }
        }
        document.addEventListener("mousedown", handler)
    })
    return (
        <nav className=' w-full bg-dark-green shadow-sm shadow-semi-light-green' ref={menuRef}>
            <div className='relative'>
                <Logo />
            </div>
            <ul className='flex justify-end gap-10 mr-24 items-center pt-2 capitalize'>
                {navi.map((nav: navi, index: number) => (
                    <li key={"--navi-" + index} className='relative z-20' onClick={()=> handleToggle(index)}>
                        <button  className='text-white flex gap-2 items-center py-2'>
                            <div>
                                {nav.text}
                            </div>
                            <div className={nav.drop.length > 0 ? "scale-50 rotate-90 main-transition triangle text-white" : "hidden"}>
                                <BsFillTriangleFill />
                            </div>
                        </button>
                        <div className={index !== dropdown ? "absolute drops bg-dark-green text-white flex-col gap-3 flex -left-10 -translate-y-[32rem] -z-10 main-transition" : "absolute drops bg-dark-green text-white flex-col gap-3 flex -left-10 translate-y-0 z-10 main-transition"}>
                            {nav.drop.map((drops:{text : string, url : string}, idx : number) => (
                                <Link href={drops.url} key={"--drops-"+idx} className='hover:bg-green-300 px-10 py-3 text-xs hover:text-dark-green'>
                                    {drops.text}
                                </Link>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar