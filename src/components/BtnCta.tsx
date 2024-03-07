import Link from 'next/link'
import React from 'react'
interface button{
    text : string,
    invert : boolean,
    url : string
}
import { FaArrowRightLong } from "react-icons/fa6";

function BtnCta(props : button) {
  return (
   <Link href={props.url} className={props.invert ? 
    'border-2 border-dark-green bg-dark-green text-semi-light-green flex gap-3 w-fit items-center px-4 py-1 rounded-lg main-transition hover:bg-semi-light-green hover:text-dark-green' : 
    'border-2 border-dark-green  text-dark-green bg-transparent flex gap-3 w-fit items-center px-4 py-1 rounded-lg main-transition hover:bg-dark-green hover:text-semi-light-green'
} >
    {props.text}
    <FaArrowRightLong />
   </Link>
  )
}

export default BtnCta