import axios from 'axios';

const url='https://cnodejs.org/api/v1/';

function getTopic (topicData) {
    return {
        type : 'TOPIC_DETAIL',
        topicData : topicData
    }
}

function getTopicData (cb,id) {
    axios.get(url+'topic/'+id).then(res => {
        cb(res.data.data);
    }).catch(error => {
        console.log(error)
    })
}

export function fetchTopic(id){
    return dispatch => {
        getTopicData(topicData => {
            dispatch(getTopic(topicData))
        },id)
    }
}