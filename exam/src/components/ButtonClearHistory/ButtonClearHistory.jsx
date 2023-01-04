import './ButtonClearHistory.scss'

export function ButtonClearHistory(props) {
    return (
        <div className={"button-clear-container"}>
            <div className={"button-clear-text"} onClick={() => {
                props.clearHistory()
            }}>Clear History
            </div>
        </div>
    )
}