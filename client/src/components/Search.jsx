import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useLocation, useNavigate } from 'react-router-dom';
const Search = () => {
  const navigate =useNavigate()
  const location=useLocation()
  const [isSearchPage,setIsSearchPage]=useState(false)
  useEffect(()=>{
      const isSearch=location.pathname==="/search"
      setIsSearchPage(isSearch)
  },[location])
     
      const redirectToSearchPage=()=>{
          navigate("/search")
      }

    

      console.log("search",isSearchPage)

  return (
    <div className='w-full min-w-[300px] lg:min-w-[420px] h-12 rounded-lg border overflow-hidden flex items-center h-full text-neutral-600 bg-slate-50 group focus-within:border-primary-100 '>
      <button className=' flex justify-center items-center h-full p-3 group-focus-within:text-primary-100 text-neutral-600'>
        <FaSearch size={22}/>
      </button>
      <div onClick={redirectToSearchPage}>
              <TypeAnimation
                    sequence={[
                // Same substring at the start will only be typed out once, initially
                'Search Chick-Feed',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Search Pig-Feed',
                1000,
                'Search Fish-Feed',
                1000,
                'Search Cattle-Feed',
                1000
              ]}
                wrapper="span"
                speed={150}
              
                      repeat={Infinity}
              />
            

      </div>
    </div>
  )
}

export default Search
