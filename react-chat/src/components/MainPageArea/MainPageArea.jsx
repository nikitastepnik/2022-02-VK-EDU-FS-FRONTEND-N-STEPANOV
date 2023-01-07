import './MainPageArea.scss'
import {Message} from "../Message";
import {displayMsgTimeInPrettyWay} from "../../utils/displayMsgTimeInPrettyWay";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useEffect} from "react";
import {SingleChat} from "../SingleChat";
import {LogoutButton} from "../LogoutButton";
import {connect} from 'react-redux'
import {getChats} from "../../actions/chatsActions";
import {getMessagesCommonChat} from "../../actions/commonChatMessagesActions";

const mapStateToProps = (state) => ({
    chats: state.chats.chats,
    loading_chats: state.chats.loading,
    common_messages: state.messagesCommonChat.messages,
    loading_common_chat_messages: state.messagesCommonChat.loading
})


function MainPageArea(props) {

    useEffect(() => {
        const getCommonMessagesTimer =
            setInterval(() => {
                props.getMessagesCommonChat()
            }, 1000)
        return () => clearInterval(getCommonMessagesTimer);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        props.getChats()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (props.areaType === "pageChat") {
        return (
            <div className="chat-area">
                {
                    props.chatName === "Общий чат" ?
                        props.common_messages ? props.common_messages.map((msg, key) => (
                            <Message
                                key={key}
                                msgAuthor={msg.author}
                                msgText={msg.text}
                                msgTime={displayMsgTimeInPrettyWay(msg.timestamp)}
                                msgType={"message-companion"}
                                iconType={"done"}></Message>)).reverse() : "Загрузка!" : null
                }
                {
                    props.msgs ? props.msgs.map((msg, key) => (
                        <Message
                            key={key}
                            msgAuthor={msg.author}
                            msgText={msg.content}
                            msgTime={displayMsgTimeInPrettyWay(msg.dispatch_date)}
                            msgType={"message-companion"}
                            iconType={"done"}></Message>)).reverse() : null
                }
            </div>
        )
    } else if (props.areaType === "pageChatList") {
        return (
            <div className={"list-chats"}>
                {
                    props.common_messages ? (
                            <div className={"single-chat-container"} id={"common-chat"}
                                 onClick={(event) => props.handleClick(event, "Общий чат")}>
                                <SingleChat
                                    handleClickAccountCircleIcon={props.handleClickAccountCircleIcon}
                                    chatName={"Общий чат"}
                                    countChatUsers={10}
                                    page={props.areaType}
                                    msgText={props.common_messages.at(-1).text}
                                    msgAuthor={props.common_messages.at(-1).author}
                                    msgTime={displayMsgTimeInPrettyWay(props.common_messages.at(-1).timestamp)}>
                                </SingleChat>
                            < /div>)
                        : null
                }
                {
                    props.chats ? props.chats.map((chat) => (
                        <div className={"single-chat-container"} id={chat.id}
                             onClick={(event) => props.handleClick(event, chat.id)}
                             key={chat.id}
                        >
                            <SingleChat
                                handleClickAccountCircleIcon={props.handleClickAccountCircleIcon}
                                countChatUsers={chat.users.length}
                                chatName={chat.topic}
                                msgAuthor={chat["last_message"].id}
                                page={props.areaType}
                                chatUsers={chat.users}
                                msgText={chat["last_message"].content}
                                msgTime={displayMsgTimeInPrettyWay(chat["last_message"].dispatch_date)}
                            ></SingleChat></div>
                    )) : props.loading_chats ? "Загрузка!" : null
                }
            </div>
        )

    } else if (props.areaType === "pageProfile") {
        return (
            <div className="display-page-area">
                <div>
                    <CameraAltIcon className="page-profile-icon"></CameraAltIcon>
                </div>
                <div className={"page-profile-full-name"}>
                    <div className={"full-name-header"}>Full name</div>
                    <div className={"full-name-value"}>{props.profileName}</div>
                </div>
                <div className={"page-profile-username"}>
                    <div className={"username-header"}>Username</div>
                    <div className={"username-value"}>{props.profileUserName}</div>
                    {props.display_cur_user_account ?
                        <div className={"username-length-limit-hint"}>Minimum length is 5 characters</div> :
                        null}
                </div>
                <div className={"page-profile-bio"}>
                    <div className={"bio-header"}>Bio</div>
                    <div className={"bio-value"}>YoY! It's me</div>
                    {props.display_cur_user_account ? <div className={"bio-value-hint"}>Any details about you</div> :
                        null}
                </div>
                {props.display_cur_user_account ? <LogoutButton></LogoutButton> :
                    null}
            </div>)
    }
}


export default connect(mapStateToProps, {getChats, getMessagesCommonChat})(MainPageArea)