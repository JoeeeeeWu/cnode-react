import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

function getTopicList (listData) {
    return {
        type : 'TOPICS',
        listData : listData
    }
}

function getNextTopicList (listData) {
    return {
        type : 'NEXT_PAGE_TOPICS',
        listData : listData
    }
}

function getTopicListData (cb,tab='all',page=1) {
    axios.get(url+'topics',{
        params: {
            limit: 10,
            tab: tab,
            page: page
        }
    }).then(res => {
        cb(res.data.data);
    }).catch(error => {
        console.log(error)
    })
}

export function fetchTopics(tab){
    return dispatch => {
        getTopicListData(listData => {
            dispatch(getTopicList(listData))
        },tab)
    }
}

export function fetchNextTopics(tab,page){
    return dispatch => {
        getTopicListData(listData => {
            dispatch(getNextTopicList(listData))
        },tab,page)
    }
}