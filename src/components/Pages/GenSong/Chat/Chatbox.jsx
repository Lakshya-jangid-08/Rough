import React from 'react'
import { GiSnake } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoSend } from "react-icons/io5";

import './Chatbox.css'
function Chatbox() {
  return (
    <div className=" chat bg-gray-900 w-full px-10 py-10">
        <div className='flex flex-col bg-slate-500 relative box h-full w-full border-solid border-2 rounded-3xl shadow-2xl'>
            {/* Left chat */}
            <div className='px-1 py-1 w-[70%] items-center flex mx-3 my-2 gap-2 '>
                <div className="profile">
                    <div className='rounded-full bg-red-300 p-1'>
                        < GiSnake size={30} style={{ color: 'blue' }}/>    
                    </div> 
                </div>
                <div className="content">
                    <h1 className='web'>Hello! I am a chatbot. I am here to help you generate a song. You can ask me anything!</h1>         
                </div>
            </div>
            {/* Right chat */}
            <div className='px-1 py-1 w-[70%] flex items-center mx-3 my-2 gap-2 '>
                <div className="profile"> 
                    <div className='rounded-full bg-cyan-200 p-1'>
                    < GiPlagueDoctorProfile size={30} color='black'/>
                    </div>
                </div>
                <div className="content">
                    <h1 className='web'>Hello! I am a chatbot. I am here to help you generate a song. You can ask me anything!</h1>         
                </div>
            </div>
            
            <div className="absolute bottom-2 w-[100%] px-5 py-3 flex justify-center items-center gap-3">
                <input type='text' placeholder='Generate Your Own' className='bg-transparent px-3 border-2 placeholder-white border-pink-50 rounded-2xl p-2 w-[75%]'/>
                <button className='bg-emerald-300 rounded-full p-2' type='submit' >< IoSend size={28}/> </button>
            </div>

        </div>
        {/*
           <div className="absolute bottom-2 w-[100%] px-5 py-3">
                <input type='text' placeholder='Generate Your Own' className='bg-red-500 h-14 rounded-lg w-[75%]'/>
                <button className='bg-emerald-300 h-14 rounded-lg ' type='submit' >Generate</button>
            </div>
         */}
    </div>
  )
}

export default Chatbox

// Html CSS Js, => Nodejs => ejs =>React => JS