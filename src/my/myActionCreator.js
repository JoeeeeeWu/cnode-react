import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

function getUser (userData) {
    return {
        type : 'GET_USER',
        userData
    }
}

function getUserData (cb,loginname) {
    axios.get(url+'user/'+loginname).then(res => {
        cb(res.data.data);
    }).catch(error => {
        console.log(error)
    })
}

export function fetchUser(loginname){
    return dispatch => {
        getUserData(userData => {
            dispatch(getUser(userData))
        },loginname)
    }
}