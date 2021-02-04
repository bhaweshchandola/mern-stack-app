const intiState = {
    name: '',
    phone_number: '',
    address: '',
    responseData: [],
    errMsg: ''
}

const formReducer = (state=intiState, action) => {
    switch(action.type){
        case "CONTACT_ADD":
            return { ...state, ["responseData"]: action.data};
        default:
            return state
    }
}

export default formReducer;