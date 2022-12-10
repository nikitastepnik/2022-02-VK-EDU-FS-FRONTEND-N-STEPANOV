import './LogoutButton.scss'

export function LogoutButton() {
    return (
        <div className={"logout-button-container"}>
            <a className={"logout-button-link"} href="http://127.0.0.1:9000/logout/">Logout</a>
        </div>
    )
}