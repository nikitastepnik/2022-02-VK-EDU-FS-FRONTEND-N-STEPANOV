import './InputForm.scss'
import React, {useState} from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';

export function InputForm(props) {
    const [inputVal, insertInputVal] = useState("")

    return (
        <form className="form" action="/" onSubmit={(event) => {
            props.handleSubmit(event);
            insertInputVal("")
        }}>
            <div className="input-container">
                <input className="form-input" name="message-text"
                       placeholder="Сообщение" type="text" value={inputVal}
                       onChange={(event) => insertInputVal(event.target.value)}
                />
                <AttachmentIcon id="icon-attach"></AttachmentIcon>
            </div>
        </form>

    )
}