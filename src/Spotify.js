export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "bfa97c78a42142548da7d057d289e0a3";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//Cheating CRUD Functionality
// export const getTokenFromUrl = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       let parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//       return initial;
//     }, {});
// };

//http://localhost:3000/#access_token=BQDuHfJ51sjooRN9o-wXvRJWCMi5PEYSoL-TnN-ADdivgmgYm_ivfY1jZG-3xlgEORTqoBEglIArPjgGdtRca43RPLFOD00lRjblUtJ1PQO-EmIwG1ogs-nl8iVAHZ8brdpHWS1J212lJIjm_0zI4FBSATuV4L75XM1nyWBBdEkvqpGW_8lAr-IcivLPA9e030CvVAK84KHJdVeBkobP&token_type=Bearer&expires_in=3600
export const getTokenFromUrl =()=>{
  return window.location.hash //go to the above url and find the access token, find the #
  .substring(1) // this helps to chop the string 
  .split('&') // split the & then 
  //accessToken= zxyi-mysuperscretekey
  .reduce((initial,item)=>{
    let parts = item.split('=')
    //zxyi-mysuperscretekey
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;

  },{}); //this return the inital before it looks empty


}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;