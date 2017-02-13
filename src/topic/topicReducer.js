const initialState = {
    topicData : {
        author : {},
        replies : []
    }
}

const topicState = (state = initialState,action) => {
    switch(action.type){
        case 'TOPIC_DETAIL':
            return Object.assign({},state,{
                topicData : action.topicData
            });
        default:
            return state;
    }
}

export default topicState;