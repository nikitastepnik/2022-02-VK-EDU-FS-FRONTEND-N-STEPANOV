import './App.css';
import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";


import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile/PageProfile";
import {PageLogin} from "./pages/PageLogin"

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitChat = this.handleSubmitChat.bind(this)
        this.handleClickAccountCircleIcon = this.handleClickAccountCircleIcon.bind(this)

        this.state = {
            page: "chats",
            chatComp: "",
            profileName: null,
            url: null,
            user_info_url: null,
        }
    }


    handleClickAccountCircleIcon(nameId, pagePrev) {
        let user_info_url = `http://127.0.0.1:9000/user/get_info/` + nameId + '/'

        let url = ""
        if (pagePrev === "PageChat") {
            url = '/single-chat'
        } else if (pagePrev === "pageChatList") {
            url = '/chats'
        }

        if (nameId === "Общий чат") {
            this.setState({
                    profileName: "Общий чат",
                    profileUserName: "Это общий чат, детка",
                    url: url
                }
            )
        } else {
            this.setState({
                user_info_url: user_info_url,
                url: url
            })
        }
    }


    handleSubmitChat(swap, chatComp) {
        if (swap) {
            this.setState({
                    page: "chat",
                    chatComp: chatComp
                }
            )
            window.localStorage.setItem("chat", chatComp)
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
                            <Route path='/' element={<PageLogin/>}/>
                            <Route path='profile' element={<PageProfile profileName={this.state.profileName}
                                                                        user_info_url={this.state.user_info_url}
                                                                        url_prev={this.state.url}
                                                                        pagePrevUrl={this.state.url}
                                                                        profileUserName={this.state.profileUserName
                                                                        }/>}/>
                            <Route path='chats' element={<PageChatList handleSubmitChat={this.handleSubmitChat}
                                                                       handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}
                                                                       chats={this.state.chats}/>}/>
                            <Route path='single-chat'
                                   element={<PageChat chatComp={this.state.chatComp} sumbitChat={this.handleSubmitChat}
                                                      handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;
