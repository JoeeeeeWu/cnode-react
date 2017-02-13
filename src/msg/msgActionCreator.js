import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

function getMsg (msgData) {
    return {
        type : 'GET_MSG',
        msgData
    }
}

function getMsgData (cb,accesstoken) {
    axios.get(url+'messages',{
        params : {
            accesstoken
        }
    }).then(res => {
        cb(res.data.data);
    }).catch(error => {
        console.log(error)
    })
}

export function fetchMsg(accesstoken){
    return dispatch => {
        getMsgData(msgData => {
            dispatch(getMsg(msgData))
        },accesstoken)
    }
}