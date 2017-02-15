const initialState = {
    loginData : {},
}

const loginState = (state = initialState, action) => {
    switch(action.type){
        case 'GET_LOGINDATA':
            return Object.assign({},state,{
                loginData : action.loginData
            })
        default:
            return state
    }
}

export default loginState;