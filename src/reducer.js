export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQD8dx4idZSm9iUC1hw0EoRep9CjbpLcHGzDJf21MLPcuYJQendHloeytz-aXdmzHTxpJlmXs8VBONCcu_fu-oHdbJbO0_vNyg_LvC7R_uxEk6rExbzWm9XwgemxCMuOYtQHfD_FkvP8cQbxAHvA92U3ligqpSU",
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
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
