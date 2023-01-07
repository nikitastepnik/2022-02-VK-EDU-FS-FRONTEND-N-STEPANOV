export function displayMsgTimeInPrettyWay(msgTime) {
    let msgTimePretty
    if (typeof msgTime !== "string") {
        msgTimePretty = new Date(msgTime).getHours() + ":"
        if (new Date(msgTime).getMinutes() < 10) {
            msgTimePretty += "0" + new Date(msgTime).getMinutes()
        } else {
            msgTimePretty += new Date(msgTime).getMinutes()
        }
    } else {
        let msgTimeUseful = msgTime.split("T")[1].split('.')[0].split(':')

        msgTimePretty = msgTimeUseful[0] + ':' + msgTimeUseful[1]
    }

    return msgTimePretty
}