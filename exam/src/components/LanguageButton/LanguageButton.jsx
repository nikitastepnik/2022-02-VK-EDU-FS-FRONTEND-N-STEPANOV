import './LanguageButton.scss'

export function LanguageButton(props) {
    if ((props.language === props.origin && props.half === "origin language")
        || (props.language === props.target && props.half === "target language")) {
        return (
            <div className={"target-language-click"}>
                {props.language}
            </div>
        )
    } else {
        return (
            <div className={"target-language"} onClick={() => {
                props.changeLanguage(props.language, props.half)
            }}>
                {props.language}
            </div>
        )
    }


}