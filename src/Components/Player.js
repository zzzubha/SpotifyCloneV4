import React from 'react'
import '../Styles/player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
function Player(spotify) {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar/>
            <Body spotify={spotify}/>
            <Footer />
        </div>
        <div ></div>
        <div ></div>
        {/* Slidebar
        body
        footer */}
    </div>
  )
}

export default Player