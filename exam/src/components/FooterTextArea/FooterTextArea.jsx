import './FooterTextArea.scss'
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function FooterTextArea(props) {
    return (
        <div className={"footer-original-language"}>
            <KeyboardVoiceIcon className={"microphone"}></KeyboardVoiceIcon>
            <div className={"sum-container"}>
            <div>{props.count + "/5000"}</div>
            <KeyboardIcon className={"keyboard"}></KeyboardIcon>
            <ArrowDropDownIcon className={"arrow-down"}></ArrowDropDownIcon>
            </div>
        </div>
        )

}