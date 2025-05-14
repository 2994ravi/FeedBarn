import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='border-t'>
       <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>©ALL RIGHTS RESERVED 2025</p>
            <div className='flex item-center gap-4 justify-center text-3xl'>
                <a href="" className='hover:text-primary-200'>
                <FaFacebook/>
                </a>

                <a href="">
                <FaInstagramSquare/>
                </a>
            </div>
       </div>
    </footer>
  )
}

export default Footer
