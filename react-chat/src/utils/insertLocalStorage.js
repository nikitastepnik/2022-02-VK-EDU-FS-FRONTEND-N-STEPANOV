export function insertLocalStorage(options) {
    const msgComp = options.msgComp
    const msgType = options.msgType || "message-me"
    const msgText = options.msgText
    const msgAuthor = options.msgAuthor || "Я"

    let contentChat = JSON.parse(window.localStorage.getItem(msgComp))
    if (contentChat) {
        if (contentChat.length === 1 && msgType !== "message-me") {
            return
        }
    }

    if (!contentChat) {
        contentChat = [];
    }
    if (msgType !== "message-me") {
        contentChat.push({
            "Name": msgAuthor,
            "text": "Привет!",
            "msgType": msgType,
            "curTime": "10:53",
            "checkType": true
        })

    } else {
        let Data = new Date()
        let Hours = Data.getHours().toLocaleString("ru-Ru")
        let Minutes = Data.getMinutes().toLocaleString("ru-Ru")
        if (Minutes < 10) {
            Minutes = "0" + Minutes
        }
        if (Hours < 10) {
            Hours = "0" + Hours
        }

        contentChat.push({
            "Name": 'Я', "text": msgText,
            "msgType": "message-me",
            "curTime": Hours + ":" + Minutes,
            "checkType": false
        })

    }

    window.localStorage.setItem(String(msgComp), JSON.stringify(contentChat))
}