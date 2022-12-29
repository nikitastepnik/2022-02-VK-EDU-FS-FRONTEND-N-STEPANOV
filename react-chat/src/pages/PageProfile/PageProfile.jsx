import React from "react";
import './PageProfile.scss'
import {Header} from "../../components/Header";
import {MainPageArea} from "../../components/MainPageArea";

export class PageProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: null,
            username: null
        }
    }


    componentDidMount = () => {
        this.getInfoUserCompanion()
    }


    getInfoUserCompanion = () => {
        fetch(this.props.user_info_url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    profileName: data["user_info"]["first_name"] + ' ' + data["user_info"]["last_name"],
                    username: data["user_info"]["username"]
                })
            })
    }


    render() {
        if (this.props.user_info_url === "Chat") {
            return (
                <div className={"screen-chat-profile-container"}>
                    <div className={"screen-chat-profile"} id={"screen-chat-profile"}>
                        <Header display_cur_user_account={this.props.display_cur_user_account} header={"PageProfile"} pagePrevUrl={this.props.pagePrevUrl}
                                typeEntity={false}
                        ></Header>
                        <MainPageArea areaType={"pageProfile"} profileName={this.props.profileName}
                                      profileUserName={this.props.profileUserName}></MainPageArea>
                    </div>
                </div>)
        } else {
            return (
                <div className={"screen-chat-profile-container"}>
                    <div className={"screen-chat-profile"} id={"screen-chat-profile"}>
                        <Header display_cur_user_account={this.props.display_cur_user_account} header={"PageProfile"}
                                pagePrevUrl={this.props.pagePrevUrl} typeEntity={true}></Header>
                        <MainPageArea display_cur_user_account={this.props.display_cur_user_account}
                                      areaType={"pageProfile"} profileName={this.state.profileName}
                                      profileUserName={this.state.profileName}></MainPageArea>
                    </div>
                </div>)

        }
    }
}