import './Title.scss'
import TranslateIcon from '@mui/icons-material/Translate';

export function Title(props) {
    if (props.type === "translate-header") {
        return (
            <div className={"background-phone"}>
                <div className={"title"}>VK Translate</div>
                <div className={"translate-icon-container"}><TranslateIcon></TranslateIcon>Text</div>
            </div>
        )
    } else if (props.type === "history-header") {
        return (
            <div className={"header-history"}>
                <div className={"history-title"}>History</div>
            </div>
        )
    }
}

