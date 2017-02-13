const initialState = {
    userData : {}
}

const userState = (state = initialState,action) => {
    switch(action.type){
        case 'GET_USER':
            return Object.assign({},state,{
                userData : action.userData
            });
        default:
            return state;
    }
}

export default userState;