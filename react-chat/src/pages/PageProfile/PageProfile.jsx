import React from "react";
import './PageProfile.scss'
import {Header} from "../../components/Header";
import {MainPageArea} from "../../components/MainPageArea";

export class PageProfile extends React.Component {
    render() {
        return (
            <div className={"screen-chat-profile-container"}>
                <div className={"screen-chat-profile"} id={"screen-chat-profile"}>
                    <Header header={"PageProfile"} pagePrevUrl={this.props.pagePrevUrl}></Header>
                    <MainPageArea areaType={"pageProfile"} profileName={this.props.profileName}
                                  profileUserName={this.props.profileUserName}></MainPageArea>
                </div>
            </div>)
    }
}