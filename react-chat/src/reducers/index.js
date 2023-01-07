import {combineReducers} from "redux"
import chats from "./chats";
import messagesCommonChat from "./messagesCommonChat";

export default combineReducers(
    {
        chats,
        messagesCommonChat
    }
)