export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
//Remove after developing...
//token: "BQAD29j3AVQL79hrmKSDsQkfc7E5WdNNvELmsBNzFEGMwGFJgiAF-PtqGgvC6o9hZVgQWYEWTEtWZ7bHRM6G7rb1VOLFIpbLSEUqnYflPtSP8W6NgSU83IcL1bd0A9NBiXZef-q0IQnovWyV9gul52qa5_qlIr6Vh2Fybi-H9CIWgxOEQUokTLuaASwovrOnzyrTxQMPsjoWjxEpV3QR"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;