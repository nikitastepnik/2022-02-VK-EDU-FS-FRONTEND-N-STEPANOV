import GoogleIcon from '@mui/icons-material/Google';
import './GoogleOAuth2Button.scss'

export function GoogleOAuth2Button() {
    return (
        <div className={"OAuth2Button"} id={"GoogleOAuth2"}>
            <div className={"google-icon-container"}>
                <GoogleIcon className={"google-icon"}></GoogleIcon>
            </div>
            <div className={"text-google-auth"}>
                <a className={"google-oauth2-link"} href="http://127.0.0.1:9000/social-auth/login/google-oauth2/">Login
                    With Google</a>
            </div>
        </div>
    )
}