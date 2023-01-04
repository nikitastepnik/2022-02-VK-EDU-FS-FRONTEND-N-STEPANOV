import React from "react";

import './HistoryPage.scss'
import {Title} from "../../components/Title";
import {ButtonClearHistory} from "../../components/ButtonClearHistory";
import {HistoryRow} from "../../components/HistoryRow";
import {insertLocalStorageHistoryValue} from "../../utils/insertLocalStorageHistoryValue";

export class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.clearHistoryTranslations = this.clearHistoryTranslations.bind(this)
        this.state = {
            translations: insertLocalStorageHistoryValue()
        }
    }


    clearHistoryTranslations() {
        window.localStorage.setItem("history", [])
        this.setState({
            translations: []
        })
    }

    render() {
        return (
            <div className={"area-history-page-container"}>
                <Title type={"history-header"}></Title>
                <ButtonClearHistory clearHistory={this.clearHistoryTranslations}></ButtonClearHistory>
                <div className={"summary-container-history-rows"}>
                    {
                        this.state.translations ? this.state.translations.map((translation, key) => (
                            <HistoryRow
                                key={key}
                                origin={translation.origin}
                                target={translation.target}
                                origin_value={translation.origin_value}
                                target_value={translation.target_value}
                            ></HistoryRow>)).reverse() : null
                    }
                </div>
            </div>
        )
    }
}