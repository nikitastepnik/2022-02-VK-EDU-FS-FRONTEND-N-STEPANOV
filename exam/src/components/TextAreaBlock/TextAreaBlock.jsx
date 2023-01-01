import './TextAreaBlock.scss'
import {HeaderTextArea} from "../HeaderTextArea";
import {FooterTextArea} from "../FooterTextArea";
import {useEffect, useState} from "react";

export function TextAreaBlock(props) {
    const [inputVal, updateInputVal] = useState(props.original_value)
    const [lenInputVal, updateLenInputVal] = useState(window.localStorage.getItem("length_input_value"))

    useEffect(() => {
        props.changeSwapStatus()
    }, [props.swap])

    return (
        <div className={"summary-container"}>
            <HeaderTextArea changeLanguage={props.changeLanguage} target={props.target}
                            origin={props.origin} swapLanguages={props.swapLanguages}></HeaderTextArea>
            <div className={"blocks-container"}>
                <div className={"translate-block-container"} id={"first-container"}>
                    <form className="translate-form" action="/" onSubmit={(event) =>
                        props.translateMessage(event)
                    }>
                        <input className="form-input" name="message-text"
                            value={props.swap ? props.original_value : inputVal} type="text"
                               onChange={(event) => {
                                   updateInputVal(event.target.value)
                                   props.checkInputLen(event.target.value.length)
                                   window.localStorage.setItem("length_input_value", event.target.value.length)
                                   updateLenInputVal(event.target.value.length)
                               }}
                        />

                    </form>
                    <FooterTextArea count={lenInputVal}></FooterTextArea>
                </div>
                <div className={"translate-block-container"} id={"second-container"}>
                    <div className="translate-form">
                        {props.translate_value ?
                            <div className="form-input" id={"output-res-exists"}>
                                {props.translate_value}
                            </div> : <div className="form-input" id={"output-res-non-exists"}>
                                {props.translation_stub}
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}


