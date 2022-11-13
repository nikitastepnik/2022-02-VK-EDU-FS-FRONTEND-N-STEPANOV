import React from 'react';

import './PageChat.scss'
import {Header} from "../../components/Header";
import {MainPageArea} from "../../components/MainPageArea";
import {insertLocalStorage} from "../../utils/insertLocalStorage";
import {InputForm} from "../../components/InputForm";

export class PageChat extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            display: "flex",
            name: this.props.chatComp,
            lastSeenTime: "2 часа назад",
            msgsChat: JSON.parse(window.localStorage.getItem(this.props.chatComp)),
        }
    }

    handleSubmit(event) {
        if (event.target[0].value) {
            insertLocalStorage({"msgComp": this.state.name, "msgText": event.target[0].value})
        }
        event.preventDefault()

        this.setState({
            msgsChat: JSON.parse(window.localStorage.getItem(this.state.name)),
            counter: this.state.counter + 1,
        })

    }


    render() {
        return (
            <div className="screen-chat" style={{display: this.state.display}}>
                <div className="form-container">
                    <Header name={this.state.name} lastSeenTime={this.state.lastSeenTime}
                            header={"PageChat"} submitChat={this.props.sumbitChat}></Header>
                    <MainPageArea msgAuthor={this.state.name} msgs={this.state.msgsChat} areaType={"pageChat"}>
                    </MainPageArea>
                    <InputForm handleSubmit={this.handleSubmit} name={this.state.name}>
                    </InputForm>
                </div>
            </div>
        )
    }

}
