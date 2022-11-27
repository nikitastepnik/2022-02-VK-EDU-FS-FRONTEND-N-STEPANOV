import './SingleChat.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export function SingleChat(props) {

    if (props.countChatUsers !== 2) {
        return (
            <div className={"single-chat"}>
                <Link className={"link-profile"} to={"/profile"}>
                <MailOutlineIcon id="icon-mail-screen-list-chats"
                                 onClick={() => props.handleClickAccountCircleIcon(props.chatName, props.page)}>
                </MailOutlineIcon>
                </Link>
                <Link className={"link-single-chat"} to={"/single-chat"}>
                    <div className={"border-container"}>
                        <div className="form-text" id="form-text-single-chat-screen-list-chats">
                            <div id="text-single-chat-screen-list-chats">{props.chatName}</div>
                            <div className={"chat-container"}>
                                <div className="msg-text" id="msg-author-list-chats-screen">{props.msgAuthor}</div>
                                <div className="msg-text" id="msg-text-list-chats-screen">{props.msgText}</div>
                            </div>
                        </div>
                        <div className="msg-time" id="msg-time-list-chats-screen">{props.msgTime}
                            <DoneIcon id="icon-done-screen-list-chats"></DoneIcon>
                        </div>
                    </div>
                </Link>
            </div>
        )
    } else {
        let chatCompId
        props.chatUsers[0] === 2 ? chatCompId = props.chatUsers[1] : chatCompId = props.chatUsers[0]
        return (
            <div className={"single-chat"}>
                <Link className={"link-profile"} to={"/profile"}>
                    <AccountCircleIcon id="icon-profile-screen-list-chats"
                                       onClick={() => props.handleClickAccountCircleIcon(chatCompId, props.page)}>
                    </AccountCircleIcon>
                </Link>
                <Link className={"link-single-chat"} to={"/single-chat"}>
                    <div className={"border-container"}>
                        <div className="form-text" id="form-text-single-chat-screen-list-chats">
                            <div id="text-single-chat-screen-list-chats">{props.chatName}</div>
                            <div className={"chat-container"}>
                                <div className="msg-text" id="msg-text-list-chats-screen-v2">{props.msgText}</div>
                            </div>
                            <div className="msg-text" id="msg-author-list-chats-screen"></div>
                        </div>
                        <div className="msg-time" id="msg-time-list-chats-screen">{props.msgTime}
                            <DoneIcon id="icon-done-screen-list-chats"></DoneIcon>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
