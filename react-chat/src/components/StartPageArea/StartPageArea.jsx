import {GoogleOAuth2Button} from "../GoogleOAuth2Button";
import './StartPageArea.scss'

export function StartPageArea(props) {
    return (
        <div className="display-page-area-login">
            <div className={"name-of-app"}>Messenger</div>
            <GoogleOAuth2Button></GoogleOAuth2Button>
        </div>
    )
}