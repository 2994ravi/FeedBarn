import React from 'react'
import logo from "../assets/logo.jpeg"
import Search from './Search'
import { Link,useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { VscTriangleDown } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";
import { useState } from 'react';
import { FaUserMd } from 'react-icons/fa';

const Header = () => {
    const navigate =useNavigate()
    const user=useSelector((state)=>state?.user)
    console.log("user from store",user)
    const[openUserMenu,setOpenUserMenu]=useState(false)

    const redirectToLoginPage=()=>{
    navigate("/login")
    }
  return (
    <header className='h-24  shadow-md sticy top-0 flex flex-col justify-center gap-1 bg-white'>
        <div className='container mx-auto flex item-center h-full px-2 justify-between' >
            {/**logo */}
            <div className='h-full'>
                <Link to={"/"} className='h-full flex justify-center items-center'>
                    <img 
                        src={logo}
                        width={130}
                        height={15}
                        alt='logo'
                        className='hidden lg:block'
                    />
                    <img 
                        src={logo}
                        width={130}
                        height={15}
                        alt='logo'
                        className='lg:hidden'
                    />
                </Link>
            </div>
        


             {/**search */}
             <div>
                <Search/>
             </div>


            {/**login  and cart*/}
            
            <div className=' flex items-center gap-10 '>
                 
                    {user?._id?(
                        <div className=' relative'>
                            <div className='flex item-center gap-2'>
                                <p>Account</p>
                                <VscTriangleDown />
                              { /* <scTriangleUp/>*/}

                            </div>
                            <div className='absolute right-0 top-16'>
                                <div className='bg-red-500 rounded p-4 min-w-52 lg:shadow-lg'>
                                    <userMenu/>

                                </div>
                            </div>
                        </div>
                    ):(
                        <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
                    )}
                
                <button className='flex item-center gap-2 bg-green-800 hover:bg-green-700 px-4 py-3 rounded text-white'>
                    {/**add to cart icon */}
                    <div className='animate-bounce'>
                    <HiOutlineShoppingCart size={28}/>

                    </div>
                    <div className='font-semibold'>
                        <p> My Cart</p>
                    </div>
                </button>
            </div>


        </div>


               
    </header>
  )
}

export default Header
