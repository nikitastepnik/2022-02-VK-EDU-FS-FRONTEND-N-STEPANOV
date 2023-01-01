import './TranslatePage.scss'
import React from "react";
import {TextAreaBlock} from "../../components/TextAreaBlock/TextAreaBlock";
import HistoryIcon from "@mui/icons-material/History";
import {Title} from "../../components/Title";

const languagesCodes = {
    "Russian": "ru",
    "Spanish": "es",
    "German": "de",
    "English": "en"
}

const translationsStub = {
    "Russian": "Перевод",
    "English": "Translate",
    "German": "Übersetzung",
    "Spanish": "Traducción"
}

export class TranslatePage extends React.Component {
    constructor(props) {
        super(props);
        this.translateMessage = this.translateMessage.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.checkInputLen = this.checkInputLen.bind(this)
        this.swapLanguages = this.swapLanguages.bind(this)
        this.changeSwapStatus = this.changeSwapStatus.bind(this)

        this.state = {
            origin: window.localStorage.getItem("origin language"),
            target: window.localStorage.getItem("target language"),
            original_value: window.localStorage.getItem("original value"),
            translate_value: window.localStorage.getItem("translate value"),
            translate_stub: translationsStub[window.localStorage.getItem("target language")],
            swap: false
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
                    target: language,
                    translate_stub: translationsStub[language]
                }
            )
        }

    }

    checkInputLen(input_length) {
        if (input_length === 0) {
            window.localStorage.setItem("original value", "")
            window.localStorage.setItem("translate value", "")
            this.setState({
                translate_value: null,
                original_value: null
            })
        }
    }

    translateMessage(event) {
        event.preventDefault()
        if (event.target[0].value) {
            window.localStorage.setItem("original value", event.target[0].value)
            this.setState({
                origin_value: event.target[0].value,
                translate_value: "..."
            })
            let body = [{"Text": event.target[0].value}]
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                },
                body: JSON.stringify(body)
            };
            const fetch_endpoint_url = 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D='
                + languagesCodes[this.state.target] + '&api-' +
                'version=3.0&from=' + languagesCodes[this.state.origin] + '&profanityAction=NoAction&textType=plain'
            fetch(fetch_endpoint_url, options)
                .then(response => response.json())
                .then(response => {
                    let translate_value = response[0].translations[0].text
                    window.localStorage.setItem("translate value", translate_value)
                    this.setState({
                        translate_value: translate_value
                    })
                })
                .catch(err => console.error(err));
        }

    }

    swapLanguages() {
        let original_language = this.state.origin
        let orig_value = this.state.original_value
        this.setState({
            origin: this.state.target,
            target: original_language,
            original_value: this.state.translate_value,
            translate_value: orig_value,
            translate_stub: translationsStub[orig_value],
            swap: true
        })
    }


    changeSwapStatus() {
        this.setState({
            swap: false
        })
    }

    render() {
        return (
            <div className={"area-page-container"}>
                <Title></Title>
                <TextAreaBlock translateMessage={this.translateMessage} changeLanguage={this.changeLanguage}
                               target={this.state.target}
                               origin={this.state.origin} original_value={this.state.original_value}
                               translate_value={this.state.translate_value} checkInputLen={this.checkInputLen}
                               translation_stub={this.state.translate_stub}
                               swapLanguages={this.swapLanguages}
                               changeSwapStatus={this.changeSwapStatus}
                               swap={this.state.swap}>
                </TextAreaBlock>
                <div className={"history-container"}>
                    <HistoryIcon className={"history-icon"}>
                    </HistoryIcon>
                    <div className={"history-text"}>История</div>
                </div>
            </div>

        )
    }
}