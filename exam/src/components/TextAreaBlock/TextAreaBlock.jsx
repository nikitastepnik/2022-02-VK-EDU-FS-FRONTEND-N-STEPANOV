import './TextAreaBlock.scss'
import {HeaderTextArea} from "../HeaderTextArea";
import {FooterTextArea} from "../FooterTextArea";

export function TextAreaBlock(props) {

    return (
        <div className={"summary-container"}>
            <HeaderTextArea changeLanguage={props.changeLanguage} target={props.target} origin={props.origin}></HeaderTextArea>
            <div className={"blocks-container"}>
            <div className={"translate-block-container"} id={"first-container"}>
            <form className="translate-form" action="/" onSubmit={(event) =>
                props.translateMessage(event, "origin")
            }>
                <input className="form-input" name="message-text" placeholder="Перевод" type="text"
                       />

            </form>
            <FooterTextArea></FooterTextArea>
            </div>
            <div className={"translate-block-container"} id={"second-container"}>
            <form className="translate-form" action="/" onSubmit={(event) =>
                props.translateMessage(event)}>
                <input className="form-input" name="message-text" placeholder="Translation" type="text"
                />
            </form>
        </div>
            </div>
        </div>
    )
}


