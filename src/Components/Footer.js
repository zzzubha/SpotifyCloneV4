import React from 'react'
import '../Styles/footer.css'
import { useStateValue } from '../StateProvider';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid,Slider } from '@material-ui/core';
import cover from '../Assets/Best-Of-Me-Aditya-Roy-Kapoor-2013.jpg'
//import { useEffect } from 'react'
function Footer() {
   
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo'src={cover}/>
       <div className='footer_songInfo'>
        <h4>Kanye</h4>
        <p>Those are shoes</p>
        
       </div>
      </div>
      <div className='footer_center'>
          <ShuffleIcon className='footer_green'/>
          <SkipPreviousIcon className='footer_icon'/>
           <PlayCircleOutlineIcon fontSize="large"className='footer_icon'/>
          <SkipNextIcon className='footer_icon'/>
          <RepeatIcon className='footer_green'/>
         
      </div>
      <div className='footer_right'>
            <Grid container spacing={2}>
              <Grid item>
                    <PlaylistPlayIcon/>
              </Grid>
               <Grid item>
                    <VolumeDownIcon/>
              </Grid>
              <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
            </Grid>
      </div>
    </div>
  )
}

export default Footer