import './MainPageArea.scss'
import {Message} from "../Message";
import {SingleChat} from "../SingleChat";
import {insertLocalStorage} from "../../utils/insertLocalStorage";
import {getObjectFromLocalStorage} from "../../utils/getObjectFromLocalStorage";
import {sortChats} from "../../utils/sortChats";
import {displayMsgTimeInPrettyWay} from "../../utils/displayMsgTimeInPrettyWay";
import LocalSeeIcon from '@mui/icons-material/LocalSee';

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
                            handleClickAccountCircleIcon={props.handleClickAccountCircleIcon}
                            page={props.areaType}
                            msgText={getObjectFromLocalStorage(chat, -1).text}
                            msgTime={displayMsgTimeInPrettyWay(getObjectFromLocalStorage(chat, -1).curTime)}
                            name={getObjectFromLocalStorage(chat, 0).Name}
                        ></SingleChat></div>
                )) : null
            }
            </div>
        )
    } else if (props.areaType === "pageProfile") {
        return(
        <div className="display-page-area">
            <div>
            <LocalSeeIcon className="pageProfilePhoto"></LocalSeeIcon>
            </div>
            <div className={"page-profile-full-name"}>
                <div className={"full-name-header"}>Full name</div>
                <div className={"full-name-value"}>{props.profileName}</div>
            </div>
            <div className={"page-profile-username"}>
                <div className={"username-header"}>Username</div>
                <div className={"username-value"}>@user</div>
                <div className={"username-length-limit-hint"}>Minimum length is 5 characters</div>
            </div>
            <div className={"page-profile-bio"}>
            <div className={"bio-header"}>Bio</div>
            <div className={"bio-value"}>YoY! It's me</div>
            <div className={"bio-value-hint"}>Any details about you</div>
            </div>
        </div>)
        }
}

