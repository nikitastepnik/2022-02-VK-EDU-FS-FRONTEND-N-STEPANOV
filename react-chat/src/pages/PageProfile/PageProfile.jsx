import React from "react";
import './PageProfile.scss'
import {Header} from "../../components/Header";

export class PageProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"screen-chat-profile-container"}>
                <div className={"screen-chat-profile"} id={"screen-chat-profile"}>
                    <Header header={"PageProfile"}></Header>
                </div>
            </div>)
    }
}