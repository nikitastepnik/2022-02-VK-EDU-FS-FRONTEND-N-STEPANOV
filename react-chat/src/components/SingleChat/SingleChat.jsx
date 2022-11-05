import './SingleChat.scss'

export function SingleChat(props) {
    return (
        <div className={"single-chat"}>
            <i className="material-icons" id="icon-profile-screen-list-chats">account_circle</i>
            <div className={"border-container"}>
                <div className="form-text" id="text-single-chat-screen-list-chats">{props.name}
                    <div className="msg-text" id="msg-text-list-chats-screen">{props.msgText}</div>
                </div>
                <div className="msg-time" id="msg-time-list-chats-screen">{props.msgTime}<
                    i className="material-icons" id="icon-done">done</i></div>
            </div>
        </div>
    )
}
