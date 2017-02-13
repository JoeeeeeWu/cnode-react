const initialState = {
    accesstoken  : localStorage.getItem("accesstoken"),
    loginData : {},
}

const appState = (state = initialState, action) => {
    switch(action.type){
        case 'IS_LOGIN':
            return Object.assign({},state,{
                accesstoken  : action.accesstoken
            });
        case 'GET_LOGINDATA':
            return Object.assign({},state,{
                loginData : action.loginData
            })
        default:
            return state
    }
}

export default appState;