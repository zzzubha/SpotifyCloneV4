import React from 'react'
import '../Styles/sidebar.css'
import sidebarlogo from '../Assets/sidebarlogo.jpg'
import SidebarOption from './SidebarOption'
//import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HomeIcon from "@material-ui/icons/Home";
import GraphicEqTwoToneIcon from '@mui/icons-material/GraphicEqTwoTone';
//import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import SearchIcon from "@material-ui/icons/Search";
//import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useStateValue} from "../StateProvider"
//import {getTokenFromUrl} from "../Spotify"
function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img className='sidebar_logo'src ={sidebarlogo} alt ="sidelogo"/>
      <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={GraphicEqTwoToneIcon}/>
        <br />
        <strong className='sidebar_title'>🦄🌈PLAYLIST ....🚀🌙</strong>
        <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;