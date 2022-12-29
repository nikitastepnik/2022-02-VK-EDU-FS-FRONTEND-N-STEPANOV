import './TranslatePage.scss'
import React from "react";
import {TextAreaBlock} from "../../components/TextAreaBlock/TextAreaBlock";

export class TranslatePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"area-page-container"}>
                <TextAreaBlock translateMessage={this.props.translateMessage} language={"origin"}>
                </TextAreaBlock>
                <TextAreaBlock language={"foreign"}>
                </TextAreaBlock>
            </div>

        )
    }
}