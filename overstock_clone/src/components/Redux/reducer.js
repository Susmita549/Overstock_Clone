

const iniState={
    users:[],
    loggedInuser:null,
    isAuth:false
}

const reducer = (state=iniState,action) => {
    switch(action.type){
        case "REGISTER":
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        
        case 'LOGIN':
            return{
                ...state,
                users : action.payload
            }

            // case 'LOGOUT':
            //     return{
            //         ...state,
            //         users : null
            //     }
        
        default:{
            return state
        }
    }
}

export default reducer