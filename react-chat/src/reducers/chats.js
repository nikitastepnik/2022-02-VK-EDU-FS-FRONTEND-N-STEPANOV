import {GET_CHATS_FAILURE, GET_CHATS_REQUEST, GET_CHATS_SUCCESS} from "../constants/chats/ActionTypes";

const initialState = {
    chats: [],
    loading: false,
    error: ''
}


const chats = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_CHATS_SUCCESS:
            return {
                chats: action.payload,
                loading: false,
                error: ''
            }
        case GET_CHATS_FAILURE:
            return {
                loading: false,
                chats: state.chats,
                error: action.payload
            }
        default:
            return state
    }
}

export default chats