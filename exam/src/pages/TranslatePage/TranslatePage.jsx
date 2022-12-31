import './TranslatePage.scss'
import React from "react";
import {TextAreaBlock} from "../../components/TextAreaBlock/TextAreaBlock";

export class TranslatePage extends React.Component {
    constructor(props) {
        super(props);
        this.translateMessage = this.translateMessage.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.state = {
            origin: window.localStorage.getItem("origin language"),
            target: window.localStorage.getItem("target language"),
        }
    }

    changeLanguage(language, half) {
        if (half === "origin language") {
            this.setState(
                {
                    origin: language
                }
            )
        } else {
            this.setState(
                {
                    target: language
                }
            )
        }

    }

    translateMessage(event, source) {
        event.preventDefault()
        if (source !== 'foreign') {

        }
    }

    render() {
        return (
            <div className={"area-page-container"}>
                <TextAreaBlock translateMessage={this.translateMessage} changeLanguage={this.changeLanguage} target={this.state.target}
                origin={this.state.origin}>
                </TextAreaBlock>
            </div>

        )
    }
}