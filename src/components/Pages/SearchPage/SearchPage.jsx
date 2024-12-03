import React from 'react'
import MainMenu from '../DefaultHome/MainMenu'
import axios from 'axios';
import './SearchPage.css'

function SearchPage() {

    // const options = {
    //     method: 'GET',
    //     url: 'https://shazam.p.rapidapi.com/artists/get-latest-release',
    //     params: {
    //       id: '73406786',
    //       l: 'en-US'
    //     },
    //     headers: {
    //       'x-rapidapi-key': '22d107b71cmsh89594132a923732p1b10adjsn52ba45273a63',
    //       'x-rapidapi-host': 'shazam.p.rapidapi.com'
    //     }
    //   };
      
    //   try {
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //   } catch (error) {
    //       console.error(error);
    //   }

  return (
    <div className='flex Searchpage'>
        <MainMenu />
        <div className=" chat bg-gray-900 w-full h-fit">
        <div className='flex flex-col relative box h-fit w-full border-solid border-2 rounded-3xl shadow-2xl'> 
            <div class="flex items-start rounded-3xl justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <form className='p-6 rounded-lg shadow-lg flex items-center space-x-4 max-w-md w-full'>
                    <input 
                    type="text" 
                    placeholder="Search for a song" 
                    class=" w-full p-3 text-gray-700 border rounded-l-lg outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button 
                    type='submit'
                    class="bg-indigo-600 text-white p-3 rounded-r-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        class="w-5 h-5">
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M8 16l6-6M16 8l-6 6" 
                        />
                    </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SearchPage