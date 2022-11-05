import './Message.scss'

export function Message(props) {
    return (
        <div className={props.msgType}>
            <div className="msg-author">{props.msgAuthor}</div>
            <div className="msg-text">{props.msgText}</div>
            <div className="msg-time">{props.msgTime}
                <i className="material-icons" id="icon-done">{props.iconType}</i>
            </div>
        </div>
    )
}

