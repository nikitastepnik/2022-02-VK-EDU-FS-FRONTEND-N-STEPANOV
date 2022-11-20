import './SingleChat.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from "react-router-dom";

export function SingleChat(props) {
    return (
        <div className={"single-chat"}>
            <Link className={"link-profile"} to={"/profile"}>
                <AccountCircleIcon id="icon-profile-screen-list-chats"
                                   onClick={() => props.handleClickAccountCircleIcon(props.name, props.page)}>
                </AccountCircleIcon>
            </Link>
            <Link className={"link-single-chat"} to={"/single-chat"}>
                <div className={"border-container"}>
                    <div className="form-text" id="text-single-chat-screen-list-chats">{props.name}
                        <div className="msg-text" id="msg-text-list-chats-screen">{props.msgText}</div>
                    </div>
                    <div className="msg-time" id="msg-time-list-chats-screen">{props.msgTime}
                        <DoneIcon id="icon-done-screen-list-chats"></DoneIcon>
                    </div>
                </div>
            </Link>
        </div>
    )
}
