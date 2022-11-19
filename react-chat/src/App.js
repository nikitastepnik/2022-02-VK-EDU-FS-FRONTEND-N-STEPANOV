import './App.css';
import React from "react";
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile/PageProfile";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.sumbitChat = this.sumbitChat.bind(this)
        this.callbackSubmitChat = this.callbackSubmitChat.bind(this)
        this.handleClickAccountCircleIcon = this.handleClickAccountCircleIcon.bind(this)

        this.state = {
            page: "chats",
            chatComp: "",
            profileName: null,
            url: null,
            chats: {
                "Дженнифер": "@Jen",
                "Никита": "@Nick",
                "Егор": "@Egor",
                "Марина": "@Marine",
                "Стефан": "@Stefan",
                "Николай": "@Nik",
                "Таня": "@Tanya",
                "Алла": "@All",
                "Тамара": "@Tom",
                "Олег": "@Oleg",
                "Мишка": "@МMishka",
                "Fil": "@Fil"
            }
        }
    }


    handleClickAccountCircleIcon(name, pagePrev) {
        let url = ""
        if (pagePrev === "PageChat") {
            url = '/single-chat'
        } else if (pagePrev === "pageChatList") {
            url = '/chats'
        }

        this.setState({
                profileName: name,
                profileUserName: this.state.chats[name],
                url: url
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
                            <Route path='/' element={<Navigate replace to="chats"/>}/>
                            <Route path='profile' element={<PageProfile profileName={this.state.profileName}
                                                                        pagePrevUrl={this.state.url}
                                                                        profileUserName={this.state.profileUserName}/>}/>
                            <Route path='chats' element={<PageChatList sumbitChat={this.sumbitChat}
                                                                       handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}
                                                                       chats={this.state.chats}/>}/>
                            <Route path='single-chat'
                                   element={<PageChat chatComp={this.state.chatComp} sumbitChat={this.sumbitChat}
                                                      handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App;
