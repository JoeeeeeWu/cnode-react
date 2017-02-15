import {combineReducers} from 'redux';
import loginState from './login/loginReducer';
import homeState from './home/homeReducer';
import topicState from './topic/topicReducer';
import myState from './my/myReducer';
import msgState from './msg/msgReducer';

const rootReducer = combineReducers({
    loginState,
    homeState,
    topicState,
    myState,
    msgState
})

export default rootReducer;