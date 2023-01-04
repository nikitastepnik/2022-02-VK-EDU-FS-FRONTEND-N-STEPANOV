import React from "react";

import './HistoryPage.scss'
import {Title} from "../../components/Title";
import {ButtonClearHistory} from "../../components/ButtonClearHistory";

export class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.clearHistoryTranslations = this.clearHistoryTranslations.bind(this)

    }


    clearHistoryTranslations() {
        window.localStorage.setItem("history", [])
    }

    render() {
        return (
            <div className={"area-page-container"}>
                <Title type={"history-header"}></Title>
                <ButtonClearHistory clearHistory={this.clearHistoryTranslations}></ButtonClearHistory>
                <div className={"container-history-rows"}></div>
            </div>
        )
    }
}