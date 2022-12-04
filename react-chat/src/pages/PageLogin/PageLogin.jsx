import React from "react";
import './PageLogin.scss'
import {StartPageArea} from "../../components/StartPageArea";

export class PageLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"page-login-container"}>
                <StartPageArea></StartPageArea>
            </div>
        )
    }
}