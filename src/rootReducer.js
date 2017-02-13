import {combineReducers} from 'redux';
import commonState from './common/commonReducer';
import homeState from './home/homeReducer';
import topicState from './topic/topicReducer';
import myState from './my/myReducer';
import msgState from './msg/msgReducer';

const rootReducer = combineReducers({
    commonState,
    homeState,
    topicState,
    myState,
    msgState
})

export default rootReducer;