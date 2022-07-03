import React, {useState} from 'react'
import Link from 'next/link'

const Nav = () => {
  const [nav , setNav] = useState(false)
  const [logo , setLogo] = useState(false)
  const handelNav= () =>{
    setNav(!nav)
    setLogo(!logo)
  }
  
  return (
    <div className='fixed items-center w-full h-20 px-4 text-black bg-gray-300'>
      <ul className='p-4' >
      <li  >DESAISIV.</li>
      <li className='text-center '>Product Dashboard</li>
      </ul>
      
    </div>
    
    
  )
}

export default Nav