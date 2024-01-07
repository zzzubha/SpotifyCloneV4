//import logo from './logo.svg';
import React,{ useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './Spotify';
import Player from './Components/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from "./StateProvider";
//our super object
const spotify = new SpotifyWebApi();
function App() {
  // Varaibles are used as state
  //State is a short term memory 
   //const [token,setToken]= useState(null);
   
  const [{user, token},dispatch] =useStateValue();
  
  //Run code based on a given condition
  useEffect(()=>{
    //code ....
    const hash= getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){ //_token = tempory token

      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })
       
        
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
         
          dispatch({
            type:'SET_USER',
            user: user

          });
        })
         spotify.getPlaylist("37i9dQZEVXcCdKJvY4iCL5").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getPlaylist('37i9dQZEVXcCdKJvY4iCL5').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      }
        )
    }
  }, [token, dispatch]);
    console.log('Show me the user🤸‍♀️',user);
    console.log('Show me the token👽',token);
   // console.log('Playlist',playlists)
  return (
    //BEM
    <div className="app">
    {
      token ?(
        <Player spotify={spotify}/> // render to next pages 
      ):(
        <Login />
    )
    } 
    
      

    </div>
  );
}

export default App;

// npm install spotify-web-api-js wrapper for Spotify app
