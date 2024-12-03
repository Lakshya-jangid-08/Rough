import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import'./MainMenu.css'

function MainMenu() {
  return (
    <div className="menubar bg-gray-950 flex justify-between items-center  px-3 py-2  ">
        <div className='subbox flex gap-5 '>
            <div className="bright flex justify-center items-center flex-col">
                <IoHome className="icon" size={25}/>
                <h1 className='font-bold'>Home</h1>
            </div>

            <div className=" bright flex justify-center items-center flex-col">
                <BiLibrary className="icon" size={25}/>
                <h1 className='font-bold'>library</h1>
            </div>
        </div>
        <div className='subbox flex gap-5 '>
            <div className="bright flex justify-center items-center flex-col">
                <GiPlagueDoctorProfile className="icon" size={30}/>
                <h1 className='font-bold'>profile</h1>
            </div>
            
            <div className=" bright flex justify-center items-center flex-col">
                <PiSignOutBold className="icon"size={25} />
                <h1 className='font-bold'>Signout</h1>
            </div>
          </div>
    </div>
  )
}

export default MainMenu