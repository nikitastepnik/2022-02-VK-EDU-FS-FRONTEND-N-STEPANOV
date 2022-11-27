import './Message.scss'

export function Message(props) {
    let msgType
    if (props.msgAuthor !== undefined) {
        if (props.msgAuthor === 'Никита Степанов' || props.msgAuthor.includes("Nikita")) {
            msgType = 'message-me'
        } else {

            msgType = props.msgType
        }
    }

    return (
        <div className={msgType}>
            <div className="msg-author">{props.msgAuthor}</div>
            <div className="msg-text">{props.msgText}</div>
            <div className="msg-time">{props.msgTime}
                <i className="material-icons" id="icon-done">{props.iconType}</i>
            </div>
        </div>
    )
}

