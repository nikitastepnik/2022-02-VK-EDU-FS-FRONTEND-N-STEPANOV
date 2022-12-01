import React from 'react';
import {Centrifuge} from 'centrifuge';

import './PageChat.scss'

import {Header} from "../../components/Header";
import {MainPageArea} from "../../components/MainPageArea";
import {InputForm} from "../../components/InputForm";

export class PageChat extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.publishToChanel = this.publishToChanel.bind(this)
        this.state = {
            display: "flex",
            chat: window.localStorage.getItem("chat"),
            messages: [],
            chatInfo: null,
            lastSeenTime: "last seen recently",
            centrifuge: new Centrifuge('ws://localhost:8000/connection/websocket'),
            chanel: 'chat.id ' + window.localStorage.getItem("chat")
        }


    }


    componentDidMount = () => {
        this.getMessages()
        this.getChatInfo()
        this.publishToChanel()
    }


    publishToChanel = () => {
        let sub = this.state.centrifuge.newSubscription(this.state.chanel)
        sub.on('publication', (messages) => {
            this.setState({
                messages: messages.data
            })
        });
        sub.subscribe();
        this.state.centrifuge.connect();
    }

    getMessages = () => {
        fetch(`http://127.0.0.1:9000/message/get_list_for_chat/?chat_id=` + this.state.chat)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    messages: data.messages
                })
                ;
            });
    }

    getChatInfo = () => {
        fetch(`http://127.0.0.1:9000/chat/get/` + this.props.chatComp)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    chatInfo: data["chat_info"]
                })
            })

    }

    handleSubmit(event) {
        if (this.state.chat === "Общий чат") {
            if (event.target[0].value) {
                fetch("https://tt-front.vercel.app/message", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        author: "Никита Степанов",
                        text: event.target[0].value
                    })
                })
            }
        } else {
            let formDataBody = new FormData()
            formDataBody.append("chat_id", this.state.chat)
            formDataBody.append("author_id", "2")
            formDataBody.append("content", event.target[0].value)

            if (event.target[0].value) {
                fetch("http://127.0.0.1:9000/message/create/", {
                    method: "POST",

                    body: formDataBody
                })
            }
        }

        event.preventDefault()


    }

    render() {
        return (
            <div className="screen-chat" style={{display: this.state.display}}>
                <div className="form-container">
                    <Header chat={this.state.chat} chatInfo={this.state.chatInfo} lastSeenTime={this.state.lastSeenTime}
                            header={"PageChat"}
                            handleClickAccountCircleIcon={this.props.handleClickAccountCircleIcon}></Header>
                    <MainPageArea chatName={this.state.chat} msgs={this.state.messages} areaType={"pageChat"}>
                    </MainPageArea>
                    <InputForm handleSubmit={this.handleSubmit} name={this.state.chat}>
                    </InputForm>
                </div>
            </div>
        )
    }

}
