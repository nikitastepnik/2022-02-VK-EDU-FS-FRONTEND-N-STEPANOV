import './MainPageArea.scss'
import {Message} from "../Message";
import {SingleChat} from "../SingleChat";
import {insertLocalStorage} from "../../utils/insertLocalStorage";
import {getObjectFromLocalStorage} from "../../utils/getObjectFromLocalStorage";
import {sortChats} from "../../utils/sortChats";
import {displayMsgTimeInPrettyWay} from "../../utils/displayMsgTimeInPrettyWay";

export function MainPageArea(props) {

    if (props.areaType === "pageChat") {
        return (
            <div className="chat-area">
                {
                    props.msgs ? props.msgs.map((msg, key) => (
                        <Message
                            key={key}
                            msgAuthor={msg.Name}
                            msgText={msg.text}
                            msgTime={displayMsgTimeInPrettyWay(msg.curTime)}
                            msgType={msg.msgType}
                            iconType={"done"}></Message>)).reverse() : null
                }
            </div>
        )
    } else if (props.areaType === "pageChatList") {
        for (let chatComp of Object.keys(props.chats)) {
            if (!JSON.parse(window.localStorage.getItem(chatComp))) {
                insertLocalStorage({
                    "msgComp": chatComp, "msgType": "message-companion",
                    "msgAuthor": chatComp
                })
            }
        }

        let chats = sortChats(Object.keys(props.chats))
        let chatsComp = []
        for (let elem of chats) {
            chatsComp.push(elem.get("name"))
        }

        return (
            <div className={"list-chats"}>{
                props.chats ? chatsComp.map((chat, key) => (
                    <div className={"single-chat-container"} id={chat}
                         onClick={(event) => props.handleClick(event, chat)}
                         key={key}
                    >
                        <SingleChat
                            msgText={getObjectFromLocalStorage(chat, -1).text}
                            msgTime={displayMsgTimeInPrettyWay(getObjectFromLocalStorage(chat, -1).curTime)}
                            name={getObjectFromLocalStorage(chat, 0).Name}
                        ></SingleChat></div>)) : null
            }
            </div>
        )
    }
}

