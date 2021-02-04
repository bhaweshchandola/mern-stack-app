// const intiState = {
//     name: '',
//     email: '',
//     phone: ''
// }

const userReducer = (state=[], action) => {
    switch(action.type){
        case "USER_ADD":
            return [...state, action.data];
        default:
            return state
    }
}

export default userReducer;