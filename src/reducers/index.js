import { combineReducers } from "redux";

import posts from './posts';
import region from './regions';

const rootReducers = combineReducers({
    posts,
    region,

})

export default rootReducers;