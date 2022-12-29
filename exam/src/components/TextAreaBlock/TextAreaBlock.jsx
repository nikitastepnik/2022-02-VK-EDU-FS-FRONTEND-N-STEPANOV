import './TextAreaBlock.scss'
import {HeaderTextArea} from "../HeaderTextArea";

export function TextAreaBlock(props) {
    return (
        <div className={"text-area-block-container"}>
            <HeaderTextArea></HeaderTextArea>
            {props.language === "origin" ? <form className="form" action="/" onSubmit={(event) =>
                props.translateMessage(event)}>
                <input className="form-input" name="message-text" placeholder="Translation" type="text"
                       />
            </form> : <form className="form" action="/">
                <input className="form-input" name="message-text" placeholder="Translation" type="text"/>
            </form>}
        </div>
    )
}


