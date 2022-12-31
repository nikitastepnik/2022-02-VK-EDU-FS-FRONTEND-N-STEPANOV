import './HeaderTextArea.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import {LanguageButton} from "../LanguageButton";

export function HeaderTextArea(props) {
    return (
        <div className={"text-area-header"}>
            <LanguageButton language={"English"} half={"origin language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
            <LanguageButton language={"Spanish"} half={"origin language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
            <LanguageButton language={"German"} half={"origin language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
            <ExpandMoreIcon className={"arrow-down"}></ExpandMoreIcon>
            <SyncAltIcon className={"arrow-revert"}></SyncAltIcon>
            <LanguageButton language={"Russian"} half={"target language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
            <LanguageButton language={"English"} half={"target language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
            <LanguageButton language={"Spanish"} half={"target language"}
                            changeLanguage={props.changeLanguage} origin={props.origin} target={props.target}></LanguageButton>
        </div>
    )
}