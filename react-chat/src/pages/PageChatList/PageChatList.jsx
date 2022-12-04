import React from "react";
import './PageChatList.scss'

import {MainPageArea} from "../../components/MainPageArea";
import {Header} from "../../components/Header";
import CreateIcon from '@mui/icons-material/Create';

export class PageChatList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event, chatComp) {
        this.props.handleSubmitChat(true, chatComp)
    }


    render() {
        return (
            <div className={"screen-list-chats-container"}>
                <div className={"screen-list-chats"} id={"screen-list-chats"}>
                    <Header header={"PageListChat"}></Header>
                    <MainPageArea chats={this.props.chats} areaType={"pageChatList"}
                                  handleClick={this.handleClick}
                                  handleClickAccountCircleIcon={this.props.handleClickAccountCircleIcon}
                    ></MainPageArea>
                    <CreateIcon id="icon-create-screen-list-chats"></CreateIcon>
                </div>
            </div>
        )
    }

}