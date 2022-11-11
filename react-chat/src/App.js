import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.sumbitChat = this.sumbitChat.bind(this)
        window.history.replaceState(null, '','/#chats')
        this.state = {
            page: "chats",
            chatComp: ""
        }

        window.addEventListener('popstate', () => {
                if (this.state.page === "chat") {
                    this.sumbitChat(false)
                } else {
                    this.sumbitChat(true, this.state.chatComp)
                }
            }
        )
    }

    sumbitChat(swap, chatComp) {
        if (swap) {
            window.history.pushState(null, '/#chats', '/#single-chat')
            this.setState({
                    page: "chat",
                    chatComp: chatComp
                }
            )
        } else {
            window.history.replaceState(null, '','/#chats')
            this.setState({
                page: "chats",
            })
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
