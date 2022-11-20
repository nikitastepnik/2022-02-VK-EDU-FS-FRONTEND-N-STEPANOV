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
        let DateObj = new Date()
        let curMonth = DateObj.getMonth()
        let prevDay = DateObj.getDay() - 1
        contentChat.push({
            "Name": msgAuthor,
            "text": "Привет!",
            "msgType": msgType,
            "curTime": "10:53",
            "curTimeFull": new Date(2022, curMonth, prevDay, 10, 43),
            "checkType": true
        })

    } else {
        let DateObj = new Date()
        let Hours = DateObj.getHours().toLocaleString("ru-Ru")
        let Minutes = DateObj.getMinutes().toLocaleString("ru-Ru")
        let Sec = DateObj.getSeconds().toLocaleString("ru-Ru")
        if (Minutes < 10) {
            Minutes = "0" + Minutes
        }
        if (Hours < 10) {
            Hours = "0" + Hours
        }

        contentChat.push({
            "Name": 'Я', "text": msgText,
            "msgType": "message-me",
            "curTime": Hours + ":" + Minutes + ":" + Sec,
            "curTimeFull": new Date(),
            "checkType": false
        })

    }

    window.localStorage.setItem(String(msgComp), JSON.stringify(contentChat))
}