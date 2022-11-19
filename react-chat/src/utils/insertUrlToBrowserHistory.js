export function insertUrlToBrowserHistory(location) {
    if (location === "chat") {
        window.history.pushState({curPage: "chat"}, "", '#single-chat')
    } else {
        window.history.pushState({curPage: "chats"}, "", '#chats')
    }
}
