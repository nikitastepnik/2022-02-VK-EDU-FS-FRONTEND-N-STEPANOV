import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {replaceUrl} from "./utils/replaceUrl";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.sumbitChat = this.sumbitChat.bind(this)
        this.state = {
            page: "chats",
            chatComp: ""
        }
        replaceUrl(this.state.page, false)
        window.addEventListener('popstate', () => {
                this.callbackSubmitChat()
            }
        )
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
            replaceUrl("chat")
        } else {
            this.setState({
                page: "chats",
            })
            replaceUrl("chats")
        }
    }

    componentWillUnmount() {
        console.log("removeChatScreenEventListener")
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
