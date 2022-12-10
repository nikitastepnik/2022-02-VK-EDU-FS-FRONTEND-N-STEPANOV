import './Header.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from "react-router-dom";
import {parseCsrfTokenIfExist} from "../../utils/parseCsrfTokenIfExist";

export function Header(props) {
    let chatCompId

    if (props.header === "PageChat" && ((props.chat === "Общий чат") || (props.chatInfo !== null))) {
        if (props.chat !== "Общий чат") {
            props.chatInfo.users[0] === 2 ? chatCompId = props.chatInfo.users[1] : chatCompId = props.chatInfo.users[0]
        } else {
            chatCompId = "Общий чат"
        }
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <Link className={"link-arrow-back"} to={"/chats"}>
                        <ArrowBackIcon id="icon-arrow-back-screen-chat">
                        </ArrowBackIcon>
                    </Link>
                    <Link className={"link-profile-screen-chat"} to={"/profile"}>
                        <AccountCircleIcon id="icon-profile"
                                           onClick={() => props.handleClickAccountCircleIcon(chatCompId, props.header)}></AccountCircleIcon>
                    </Link>
                    <div className="companion-info">
                        <div className="form-text"
                             id="form-text-screen-chat">{props.chat !== "Общий чат" ? props.chatInfo.topic : props.chat}</div>
                        {props.chat !== "Общий чат" ?
                            <div className="form-text-after">{props.lastSeenTime}</div> : null}
                    </div>
                    <SearchIcon id="icon-search-screen-chat"></SearchIcon>
                    <MoreVertIcon id="icon-more-vert-screen-chat"></MoreVertIcon>
                </div>
            </div>
        )
    } else if (props.header === "PageListChat") {
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <Link className={"link-cur-user-profile"} to={"/profile"}>
                    <DehazeIcon id="icon-dehaze-screen-list-chats" onClick={() =>
                        props.handleClickAccountCircleIcon(parseCsrfTokenIfExist(), "pageChatList")}></DehazeIcon>
                    </Link>
                    <div className="form-text" id="form-text-screen-list-chats">Messenger</div>
                    <SearchIcon id="icon-search-screen-list-chats"></SearchIcon>
                </div>
            </div>
        )
    } else if (props.header === 'PageProfile') {
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <Link className={"link-arrow-back"} to={props.pagePrevUrl}>
                        <ArrowBackIcon id="icon-arrow-back-screen-profile-chat">
                        </ArrowBackIcon>
                    </Link>
                    {props.display_cur_user_account ? <div className="form-text" id="form-text-screen-chat-profile">Edit Profile</div>
                    : (props.typeEntity ? <div className="form-text" id="form-text-screen-chat-profile">User Info</div>
                        : <div className="form-text" id="form-text-screen-chat-profile">Chat Info</div>)}
                    {props.display_cur_user_account ? <DoneIcon className="icon-done-screen-profile-chat"></DoneIcon>
                        : null}
                </div>
            </div>
        )
    }

}
