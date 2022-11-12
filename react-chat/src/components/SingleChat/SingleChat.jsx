import './SingleChat.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoneIcon from '@mui/icons-material/Done';

export function SingleChat(props) {
    return (
        <div className={"single-chat"}>
            <AccountCircleIcon id="icon-profile-screen-list-chats"></AccountCircleIcon>
            <div className={"border-container"}>
                <div className="form-text" id="text-single-chat-screen-list-chats">{props.name}
                    <div className="msg-text" id="msg-text-list-chats-screen">{props.msgText}</div>
                </div>
                <div className="msg-time" id="msg-time-list-chats-screen">{props.msgTime}
                    <DoneIcon id="icon-done-screen-list-chats"></DoneIcon>
                </div>

            </div>
        </div>
    )
}
