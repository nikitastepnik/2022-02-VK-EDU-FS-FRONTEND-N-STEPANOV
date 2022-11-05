import './HeaderPage.scss'

export function HeaderPage(props) {
    if (props.header === "PageChat") {
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <i className="material-icons" id="icon-arrow-back-screen-chat"
                       onClick={() => props.submitChat()}>arrow_back</i>
                    <i className="material-icons" id="icon-profile">account_circle</i>
                    <div className="companion-info">
                        <div className="form-text" id="form-text-screen-chat">{props.name}</div>
                        <div className="form-text-after">{props.lastSeenTime}</div>
                    </div>
                    <i className="material-icons" id="icon-search-screen-chat">search</i>
                    <i className="material-icons" id="icon-more-vert-screen-chat">more_vert</i>
                </div>
            </div>
        )
    } else if (props.header === "PageListChat") {
        return (
            <div className="header-frame">
                <div className="header-frame-content">
                    <i className="material-icons" id="icon-dehaze-screen-list-chats">dehaze</i>
                    <div className="form-text" id="form-text-screen-list-chats">Messenger</div>
                    <i className="material-icons" id="icon-search-screen-list-chats">search</i>
                </div>
            </div>
        )
    }

}
