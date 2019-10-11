import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCES'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const fetchSmurf = () => dispatch => {
    dispatch({ type: START_FETCHING })
        axios.get('http://localhost:3333/smurfs')
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
            .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
}

export const START_POSTING = 'START_POSTING'
export const POST_SUCCES = 'POST_SUCCES'
export const POST_FAILURE = 'POST_FAILURE'
export const postSmurf = (item) => dispatch => {
    dispatch({ type: START_POSTING })
        axios.post('http://localhost:3333/smurfs', item)
            .then(res => dispatch({ type: POST_SUCCES, payload: res.data}))
            .catch(err => dispatch({ type: POST_FAILURE, payload: err}))
}

export const RESET_DATA = 'RESET_DATA'
export const resetData = (e) => (dispatch) => {
    e.preventDefault()
    dispatch({ type: RESET_DATA})

}