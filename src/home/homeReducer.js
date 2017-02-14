const initialState = {
    listData : [],
    exscrollTop : 0,
    extab : null,
    expage : 0
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
            });
        case 'MARK_SCROLL':
            return Object.assign({},state,{
                exscrollTop : action.scrollTop
            });
        case 'MARK_TAB':
            return Object.assign({},state,{
                extab : action.tab
            });
        case 'MARK_PAGE':
            return Object.assign({},state,{
                expage : action.page
            });
        default:
            return state
    }
}

export default homeState