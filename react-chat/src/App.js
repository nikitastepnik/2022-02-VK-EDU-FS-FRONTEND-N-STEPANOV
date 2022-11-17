import './App.css';
import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate
}
    from "react-router-dom";


import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile/PageProfile";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.sumbitChat = this.sumbitChat.bind(this)
        this.callbackSubmitChat = this.callbackSubmitChat.bind(this)

        this.state = {
            page: "chats",
            chatComp: ""
        }
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
        } else {
            this.setState({
                page: "chats",
            })
        }
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <main>
                        <Routes>
                            {/*<Route path='/' element={<Navigate replace to="chats"/>}/>*/}
                            <Route path='/' element={<PageProfile/>}/>
                            <Route path='chats' element={<PageChatList sumbitChat={this.sumbitChat}/>}/>
                            <Route path='single-chat'
                                   element={<PageChat chatComp={this.state.chatComp} sumbitChat={this.sumbitChat}/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;
