import {
    GET_MESSAGES_COMMON_CHAT_FAILURE,
    GET_MESSAGES_COMMON_CHAT_REQUEST,
    GET_MESSAGES_COMMON_CHAT_SUCCESS
} from "../../constants/messagesCommonChats/ActionTypes"

const getCommonChatMessagesStarted = () => (
    {
        type: GET_MESSAGES_COMMON_CHAT_REQUEST
    }
)

const getCommonChatMessagesSuccess = (messages) => (
    {
        type: GET_MESSAGES_COMMON_CHAT_SUCCESS,
        payload: messages
    }
)

const getCommonChatMessagesFailure = (message) => (
    {
        type: GET_MESSAGES_COMMON_CHAT_FAILURE,
        payload: message
    }
)

export const getMessagesCommonChat = () => {
    return ((dispatch, getState) => {
        dispatch(getCommonChatMessagesStarted())
        fetch(`https://tt-front.vercel.app/messages/`)
            .then(res => res.json())
            .then(data => dispatch(getCommonChatMessagesSuccess(data)))
            .catch(err => {
                dispatch(getCommonChatMessagesFailure(err.message))
            })
    })
}
