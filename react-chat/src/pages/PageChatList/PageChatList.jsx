import React from "react";
import './PageChatList.scss'

import {MainPageArea} from "../../components/MainPageArea";
import {HeaderPage} from "../../components/HeaderPage";


export class PageChatList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            chats: {
                "Дженнифер": "Jen", "Никита": "Nick", "Егор": "Egor", "Марина": "Marine", "Стефан": "Stefan",
                "Николай": "Nik", "Алла": "All", "Тамара": "Tom", "Олег": "Oleg"
            }
        }
    }

    handleClick(event) {
        let handleElem = event.target.parentNode
        while (handleElem.className !== "single-chat-container") {
            handleElem = handleElem.parentNode
        }
        this.props.sumbitChat(true, handleElem.id)
    }

    render() {
        return (
            <div className={"screen-list-chats-container"}>
                <div className={"screen-list-chats"} id={"screen-list-chats"}>
                    <HeaderPage header={"PageListChat"}></HeaderPage>
                    <MainPageArea chats={this.state.chats} areaType={"pageChatList"}
                                  handleClick={this.handleClick}></MainPageArea>
                    <i className="material-icons" id="icon-create-screen-list-chats">create</i>
                </div>
            </div>
        )
    }

}