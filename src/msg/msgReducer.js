const initialState = {
    msgData : {
        has_read_messages : [],
        hasnot_read_messages : []
    }
}

const msgState = (state=initialState,action) => {
    switch(action.type){
        case 'GET_MSG':
            return Object.assign({},state,{
                msgData : action.msgData
            });
        default:
            return state
    }
}

export default msgState;