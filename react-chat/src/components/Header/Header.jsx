import './Header.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DoneIcon from '@mui/icons-material/Done';
import {Link} from "react-router-dom";

export function Header(props) {
    if (props.header === "PageChat") {
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <Link className={"link-arrow-back"} to={"/chats"}>
                        <ArrowBackIcon id="icon-arrow-back-screen-chat">
                        </ArrowBackIcon>
                    </Link>
                    <Link className={"link-profile-screen-chat"} to={"/profile"}>
                        <AccountCircleIcon id="icon-profile"
                                           onClick={() => props.handleClickAccountCircleIcon(props.name, props.header)}></AccountCircleIcon>
                    </Link>
                    <div className="companion-info">
                        <div className="form-text" id="form-text-screen-chat">{props.name}</div>
                        <div className="form-text-after">{props.lastSeenTime}</div>
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
                    <DehazeIcon id="icon-dehaze-screen-list-chats"></DehazeIcon>
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
                    <div className="form-text" id="form-text-screen-chat-profile">Edit Profile</div>
                    <DoneIcon className="icon-done-screen-profile-chat"></DoneIcon>
                </div>
            </div>
        )
    }

}
