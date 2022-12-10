import './App.css';
import React from "react";
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {PageChatList} from "./pages/PageChatList/PageChatList";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile/PageProfile";
import {PageLogin} from "./pages/PageLogin"
import {parseCsrfTokenIfExist} from "./utils/parseCsrfTokenIfExist";

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
            display_cur_user_account: false,
            user_id: undefined
        }
    }

    componentDidMount() {
        let fetch_url = `http://127.0.0.1:9000/check_user_auth/`
        fetch(fetch_url, {
            headers: {
                'X-XSRF-TOKEN': parseCsrfTokenIfExist()
            }
        })
            .then(res => res.json())
            .then(data =>
                this.setState({
                        is_user_logged_in: data.is_user_logged_in,
                        user_id: data.user_id
                    }
                )
            )
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
                    url: url,
                    user_info_url: "Chat",
                    display_cur_user_account: false
                }
            )
        } else if (nameId !== parseCsrfTokenIfExist()) {
            this.setState({
                user_info_url: user_info_url,
                url: url,
                display_cur_user_account: false
            })
        } else {
            this.setState({
                user_info_url: `http://127.0.0.1:9000/user/get_info/` + this.state.user_id + '/',
                url: url,
                display_cur_user_account: true
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

//React.Fragment

    render() {
        return (
            <Router>
                <div className="App">
                    <main>
                        <Routes>
                            {this.state.is_user_logged_in ?
                                (<>
                                    <Route path='profile' element={<PageProfile profileName={this.state.profileName}
                                                                                user_info_url={this.state.user_info_url}
                                                                                url_prev={this.state.url}
                                                                                pagePrevUrl={this.state.url}
                                                                                profileUserName={this.state.profileUserName}
                                                                                display_cur_user_account={this.state.display_cur_user_account}/>}/>
                                    <Route path='chats' element={<PageChatList handleSubmitChat={this.handleSubmitChat}
                                                                               handleClickAccountCircleIcon=
                                                                                   {this.handleClickAccountCircleIcon}
                                                                               chats={this.state.chats}/>}/>
                                    <Route path='single-chat' element={<PageChat chatComp={this.state.chatComp}
                                                                                 sumbitChat={this.handleSubmitChat}
                                                                                 handleClickAccountCircleIcon=
                                                                                     {this.handleClickAccountCircleIcon}/>}/>
                                    <Route path="*"
                                           element={<Navigate to="chats" chats={this.state.chats}/>}></Route></>) :
                                <Route path='*' element={<PageLogin/>}/>}
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }


}

export default App;
