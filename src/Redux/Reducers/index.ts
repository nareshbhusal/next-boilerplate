// #region Global Imports
import { combineReducers } from "redux";
// #endregion Global Imports

// #region Local Imports
import { HomeReducer } from "./home";
import { AboutReducer } from "./about";
// #endregion Local Imports

export default combineReducers({
    about: AboutReducer,
    home: HomeReducer,
});
