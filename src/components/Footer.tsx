import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface footerProject {
    name: string,
    url: string
}
interface footerContact {
    name: string,
    image: string,
    url: string
}

function Footer() {
    const projects: footerProject[] = [
        {
            name: "crossbow",
            url: ""
        },
        {
            name: "voxen",
            url: ""
        }
    ]
    const contacts: footerContact[] = [
        {
            name: "linkedin",
            image: "/in.svg",
            url: ""
        },
        {
            name: "git",
            image: "/git-icon.svg",
            url: ""
        },
        {
            name: "whatsapp",
            image: "/wa.svg",
            url: ""
        },
        {
            name: "gmail",
            image: "/gmail.svg",
            url: ""
        }
    ]
    return (
        <div className=' w-full bg-dark-green shadow-sm shadow-semi-light-green  text-light-green' >
            <div className='grid grid-cols-2 max-w-[50vw] mx-auto py-10'>
                <div className=''>
                    <Image src={"/logo.svg"} width={0} height={0} alt='logo' className='w-28' />
                </div>
                <div className='flex gap-10 justify-between'>
                    <div className=''>
                        <div className='text-2xl font-semibold'>
                            Wira Mahatvavirya
                        </div>
                        <div className='font-thin'>
                            frontend developer & UI UX designer
                        </div>
                        <div className='flex gap-3 mt-5'>
                            {contacts.map((contact: footerContact, index: number) => (
                                <Link key={"--contact-" + index} href={contact.url} className='relative contact-link'>
                                    <Image src={contact.image} width={0} height={0} alt={contact.name} className='w-5' />
                                    <div className='absolute left-[50%]  w-fit mx-auto translate-x-[-50%] contact-text px-2 py-1 bg-light-green text-dark-green rounded-xl translate-y-3 hidden'>
                                        {contact.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-semibold'>
                            Projects
                        </div>
                        {projects.map((project: footerProject, index: number) => (
                            <Link href={project.url} key={"--footer-" + index} className='font-thin'>
                                {project.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='text-center bg-black py-5'>
                &copy; Wira Mahatvavirya - 2024. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer