export function displayMsgTimeInPrettyWay(msgTime) {
    if (typeof msgTime === 'string') {
        let msgTimeUseful = msgTime.split("T")[1].split('.')[0].split(':')

        return msgTimeUseful[0] + ':' + msgTimeUseful[1]
    } else {
        return "null"
    }
}