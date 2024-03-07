import React from 'react'
interface heading{
    text : string,
    dark : boolean
}

function Heading(props:heading) {
    
  return (
    <div className={!props.dark?'text-semi-dark-green capitalize text-3xl font-semibold mb-10':'text-semi-light-green capitalize text-3xl font-semibold mb-10'}>
        --{props.text}
    </div>
  )
}

export default Heading