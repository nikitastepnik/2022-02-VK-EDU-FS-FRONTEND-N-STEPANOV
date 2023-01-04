import "./HistoryRow.scss"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export function HistoryRow(props) {
    return (
        <div className={"container-history-row"}>
            <div className={"languages-container"}>
                {props.origin}
                <ArrowRightAltIcon></ArrowRightAltIcon>
                {props.target}
            </div>
            <div className={"translations-container"}>
                <div className={"origin-value"}>{props.origin_value}</div>
                <div className={"translate-value"}>{props.target_value}</div>
            </div>
        </div>
    )
}