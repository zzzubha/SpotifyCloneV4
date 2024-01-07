import React from 'react'
import '../Styles/header.css'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useStateValue } from '../StateProvider';
function Header() {

    const [{user},dispatch]= useStateValue();
  return (
    <div className='header'>
        <div className='header_left'>
        <SearchIcon/>
        <input placeholder='What do you want to listen to ? ' type = "text"/>
        </div>
        <div className='header_right'>

        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
        </div>

    </div>
  )
}

export default Header