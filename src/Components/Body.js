import React from 'react'
import '../Styles/body.css'
import Header from "../Components/Header"
//import discover from "../Assets/discoverweekly.jpg"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleOutline';
import { Favorite } from '@material-ui/icons';
import { MoreHoriz } from '@material-ui/icons';
import SongRow from './SongRow'
import { useStateValue } from '../StateProvider'
function Body(spotify) {

  const [{discover_weekly}, dispatch] = useStateValue()
  return (
    <div className='body'>
      <Header spotify={spotify}/>
       <div className="body_Info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_InfoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
        <div className='body_song'>
            <div className='body_icons'>
                <PlayCircleFilledIcon className='body_shuffle'/>
                <Favorite fontSize='large'/>
                <MoreHoriz/>
        </div>
        {discover_weekly?.tracks.items.map(item=>
          ( 
            <SongRow track={item.track}/>

          ))}
        </div>
    </div>
  )
}

export default Body