import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, START_POSTING, POST_SUCCES, POST_FAILURE, RESET_DATA } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING: 
        return {
            ...state,
            isFetching: true,
            error: ''
        }
        case START_POSTING:
        return {
            ...state,
            error: ''
        }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_SUCCES:
            return {
                ...state,
                isPosting: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
            }
        case POST_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case RESET_DATA:
            return {
                state
            }
        default:
            return state;
    }
}

export default reducer