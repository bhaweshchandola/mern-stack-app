import counterReducer from './counter'
import loggedReducer from './islogged'
import userReducer from './users'
import formReducer from './formdata';
import { combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    users: userReducer,
    formData: formReducer
})

export default allReducers;