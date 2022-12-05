import './App.css';
import React from "react";
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile/PageProfile";
import {PageLogin} from "./pages/PageLogin"

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitChat = this.handleSubmitChat.bind(this)
        this.handleClickAccountCircleIcon = this.handleClickAccountCircleIcon.bind(this)
        this.handleUserLoginSuccess = this.handleUserLoginSuccess.bind(this)
        this.state = {
            page: "chats",
            chatComp: "",
            profileName: null,
            url: null,
            user_info_url: null,
            is_user_loggined: false,
        }
    }

    handleUserLoginSuccess(bool_param) {
        this.setState({
            is_user_loggined: bool_param
        })
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
                            <Route path='/'
                                   element={<PageLogin handleUserLoginSuccess={this.handleUserLoginSuccess}/>}/>
                            {this.state.is_user_loggined ?
                                <Route path='profile' element={<PageProfile profileName={this.state.profileName}
                                                                            user_info_url={this.state.user_info_url}
                                                                            url_prev={this.state.url}
                                                                            pagePrevUrl={this.state.url}
                                                                            profileUserName={this.state.profileUserName
                                                                            }/>}/> :
                                <Route path='profile' element={<Navigate replace to="/"/>}/>}
                            {this.state.is_user_loggined ?
                                <Route path='chats' element={<PageChatList handleSubmitChat={this.handleSubmitChat}
                                                                           handleUserLoginSuccess={this.handleUserLoginSuccess}
                                                                           handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}
                                                                           chats={this.state.chats}/>}/> :
                                <Route path='chats' element={<Navigate replace to="/"/>}/>}
                            {this.state.is_user_loggined ?
                                <Route path='single-chat' element={<PageChat chatComp={this.state.chatComp}
                                                                             sumbitChat={this.handleSubmitChat}
                                                                             handleClickAccountCircleIcon={this.handleClickAccountCircleIcon}/>}/> :
                                <Route path='single-chat' element={<Navigate replace to="/"/>}/>}
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }


}

export default App;
