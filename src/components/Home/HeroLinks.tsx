import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface links{
    icon : string,
    url : string
}

function HeroLinks() {
    const links : links[] = [
        {
            icon : "/git.svg",
            url : ""
        },
        {
            icon : "/linkdin.svg",
            url : ""
        }
    ]
  return (
    <div className='flex gap-4 mt-5'>
        {
            links.map((link:links, index : number) =>(
                <Link href={link.url} key={"--link-"+index}>
                    <Image src={link.icon} width={30} height={50} alt={link.icon}/>
                </Link>
            ))
        }
    </div>
  )
}

export default HeroLinks    