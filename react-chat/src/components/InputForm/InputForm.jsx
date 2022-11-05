import './InputForm.scss'
import React from "react";

export function InputForm() {
    return (
        <div className="input-container">
            <input className="form-input" name="message-text"
                   placeholder="Сообщение" type="text"/>
            <i className="material-icons" id="icon-attach">attachment</i>
        </div>
    )
}