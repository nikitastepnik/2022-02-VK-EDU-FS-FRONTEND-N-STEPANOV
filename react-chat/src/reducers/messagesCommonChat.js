import {
    GET_MESSAGES_COMMON_CHAT_FAILURE,
    GET_MESSAGES_COMMON_CHAT_REQUEST,
    GET_MESSAGES_COMMON_CHAT_SUCCESS
} from "../constants/messagesCommonChats/ActionTypes"


const initialState = {
    messages: null,
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_COMMON_CHAT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_MESSAGES_COMMON_CHAT_SUCCESS:
            return {
                messages: action.payload,
                loading: false,
                error: ''
            }
        case GET_MESSAGES_COMMON_CHAT_FAILURE:
            return {
                loading: false,
                messages: state.messages,
                error: action.payload
            }
        default:
            return state
    }
}