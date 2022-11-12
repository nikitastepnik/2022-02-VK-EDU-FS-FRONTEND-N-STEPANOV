import './InputForm.scss'
import React from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';

export function InputForm() {
    return (
        <div className="input-container">
            <input className="form-input" name="message-text"
                   placeholder="Сообщение" type="text"/>
            <AttachmentIcon id="icon-attach"></AttachmentIcon>
        </div>
    )
}