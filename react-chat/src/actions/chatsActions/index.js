import {GET_CHATS_FAILURE, GET_CHATS_REQUEST, GET_CHATS_SUCCESS} from "../../constants/chats/ActionTypes";

const getChatsStarted = () => (
    {
        type: GET_CHATS_REQUEST
    }
)

const getChatsSuccess = (chats) => (
    {
        type: GET_CHATS_SUCCESS,
        payload: chats.items
    }
)

const getChatsFailure = (message) => (
    {
        type: GET_CHATS_FAILURE,
        payload: message
    }
)

export const getChats = () => {
    return ((dispatch, getState) => {
            dispatch(getChatsStarted())
            fetch(`http://127.0.0.1:9000/chat/get_all_chats/`)
                .then(res => res.json())
                .then(data => {
                    dispatch(getChatsSuccess(data))
                })
                .catch(err => {
                    dispatch(getChatsFailure(err.message))
                })
        }
    )
}