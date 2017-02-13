const initialState = {
    listData : []
}

const homeState = (state=initialState,action) => {
    switch(action.type){
        case 'TOPICS':
            return Object.assign({},state,{
                listData : action.listData
            });
        case 'NEXT_PAGE_TOPICS':
            return Object.assign({},state,{
                listData : [...state.listData,...action.listData]
            })
        default:
            return state
    }
}

export default homeState