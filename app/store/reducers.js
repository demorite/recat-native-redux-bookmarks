import {combineReducers} from "redux"
import authReducer from "../redux/modules/auth"

export default combineReducers({
    auth: authReducer
});