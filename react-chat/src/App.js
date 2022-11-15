import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {insertUrlToBrowserHistory} from "./utils/insertUrlToBrowserHistory";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.sumbitChat = this.sumbitChat.bind(this)
        this.callbackSubmitChat = this.callbackSubmitChat.bind(this)

        this.state = {
            page: "chats",
            chatComp: ""
        }
        insertUrlToBrowserHistory(this.state.page)
        window.addEventListener('popstate',
            this.callbackSubmitChat
        )
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.callbackSubmitChat)
    }

    callbackSubmitChat() {
        if (this.state.page === "chat") {
            this.sumbitChat(false)
        } else {
            this.sumbitChat(true, this.state.chatComp)
        }
    }

    sumbitChat(swap, chatComp) {
        if (swap) {
            this.setState({
                    page: "chat",
                    chatComp: chatComp
                }
            )
            insertUrlToBrowserHistory("chat")
        } else {
            this.setState({
                page: "chats",
            })
            insertUrlToBrowserHistory("chats")
        }
    }


    render() {
        return (
            <div>
                {this.state.page === 'chats' && <PageChatList path="/home" sumbitChat={this.sumbitChat}>
                </PageChatList>}
                {this.state.page === 'chat' &&
                    <PageChat chatComp={this.state.chatComp} sumbitChat={this.sumbitChat}>
                    </PageChat>}
            </div>
        )
    }
}

export default App;
