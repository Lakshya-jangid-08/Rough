import React from 'react'
import Menubar from './Menubar'
import Suggestion from './SuggestionTool/Suggestion'
import Chatbox from './Chat/Chatbox'

function GenSong() {
  return (
  <>
    <div className=' flex flex-row h-full'>
        < Menubar />
        < Suggestion />
        < Chatbox />
    </div>
  </>
  )
}

export default GenSong