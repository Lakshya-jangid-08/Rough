import React from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import './Menubar.css'
function Menubar() {
  return (
    <div className="menubar bg-gray-950 flex justify-between items-center flex-col h-screen px-3 py-2">
        <div className='flex gap-5 flex-col'>
            <div className="bright flex justify-center items-center flex-col">
                <RiChatNewLine className="icon" size={25}/>
                <h1>NewChat</h1>
            </div>

            <div className="bright flex justify-center items-center flex-col">
                <IoHome className="icon" size={25}/>
                <h1>Home</h1>
            </div>

            <div className="bright flex justify-center items-center flex-col">
                <FaSearch className="icon" size={25}/>
                <h1>Search</h1>
            </div>

            <div className="bright flex justify-center items-center flex-col">
                <BiLibrary className="icon" size={25}/>
                <h1>library</h1>
            </div>
        </div>
        <div className='flex gap-5 flex-col'>
            <div className="bright flex justify-center items-center flex-col">
                <GiPlagueDoctorProfile className="icon" size={50}/>
                <h1>profile</h1>
            </div>
            
            <div className="bright flex justify-center items-center flex-col">
                <PiSignOutBold className="icon"size={25} />
                <h1>Signout</h1>
            </div>
          </div>
    </div>
  )
}

export default Menubar