import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { Link, useNavigate } from 'react-router-dom';
import AxiosToastError from '../utils/AxiosToastError'; 


const Register = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""

    })
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const navigate=useNavigate()



    const handleChange=(e)=>{
        const{name,value}=e.target  
        setData((preve)=>{
            return{
                ...preve,
                [name]:value
            }
        })
    
    }

    const valideValue =Object.values(data).every(el => el)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(data.password !== data.confirmPassword){
            toast.error(
                "password and confirm password must be same"
            )
            return
        }

        try {
            const response = await Axios({
                ...SummaryApi.register,
                data : data
            })
            
            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                setData({
                    name : "",
                    email : "",
                    password : "",
                    confirmPassword : ""
                })
                navigate("/login")
            }

        } catch (error) {
            AxiosToastError(error)
        }


    }
  return (
    <section className='w-full container mx-auto px-2'>
            <div className='bg-gray-300 my-4 w-full max-w-lg mx-auto rounded p-4'>
                <p>Welcome to The Feed Barn</p>
                <form className='grid gap-2 mt-6 ' onSubmit={handleSubmit}> 
                    <div className='grid'>
                        <label htmlFor="name">Name:</label>
                        <input 
                        type="text"
                        id="name"
                        autoFocus
                        className='bg-blue-50 p-2 border rounded outline-none focus-within:border-primary-200'
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder='Enter Your Name'
                        />
                    </div>
                    <div className='grid'>
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="email"
                        id="email"
                        className='bg-blue-50 p-2 border rounded outline-none focus-within:border-primary-200'
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder='Enter Your Email'
                        />
                    </div>

                    <div className='grid gap-1'>
                                <label htmlFor="password">Password:</label>
                        <div className='bg-blue-50 p-2 border rounded flex item-center focus-within:border-primary-200'>
                                <input 
                                type={showPassword ? "text":"password"}
                                id="password"
                                className='w-full outline-none'
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Enter Your Password'
                                />
                                <div onClick={()=> setShowPassword(preve =>!preve)} >
                                    {
                                        showPassword?(
                                                <FaEye/>
                                        ):(
                                        <FaRegEyeSlash/>
                                        )
                                    }
                                    </div>
                    </div>


                    </div> <div className='grid gap-1'>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                        <div className='bg-blue-50 p-2 border rounded flex item-center focus-within:border-primary-200'>
                                <input 
                                type={showConfirmPassword ? "text":"confirmPassword"}
                                id="confirmPassword"
                                className='w-full outline-none'
                                name="confirmPassword"
                                value={data.confirmPassword}
                                onChange={handleChange}
                                placeholder='Confirm Your Password'
                                />
                                <div onClick={()=> setShowConfirmPassword(preve =>!preve)} >
                                    {
                                        showConfirmPassword?(
                                                <FaEye/>
                                        ):(
                                        <FaRegEyeSlash/>
                                        )
                                    }
                                </div>

                        </div>   
                    </div>
                    <button disabled={!valideValue} className={` ${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" }    text-white py-2 rounded font-semibold my-3 tracking-wide`}>Register</button>

                        
                </form>
                <p>
                    Already have account ? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link>
                </p>

            </div>
    </section>
  )
};

export default Register

