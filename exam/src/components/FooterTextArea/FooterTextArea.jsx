import './FooterTextArea.scss'
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import KeyboardIcon from '@mui/icons-material/Keyboard';

export function FooterTextArea(props) {
    return (
        <div className={"footer-original-language"}>
            <KeyboardVoiceIcon className={"microphone"}></KeyboardVoiceIcon>
            <KeyboardIcon className={"keyboard"}></KeyboardIcon>
        </div>
        )

}