export function replaceUrl(location, replaceFlag = true) {
    const homepage = '2022-2-VK-EDU-FS-FRONTEND-N-STEPANOV/'
    if (replaceFlag) {
        if (location === "chat") {
            window.history.replaceState({curPage: "chat"}, "", '#single-chat')
        } else {
            window.history.replaceState({curPage: "chats"}, "", '#chats')
        }
    } else {
        if (window.history.state === null) {
            window.history.pushState({curPage: "chat"}, "", homepage +'#chats')
        }
    }
}
