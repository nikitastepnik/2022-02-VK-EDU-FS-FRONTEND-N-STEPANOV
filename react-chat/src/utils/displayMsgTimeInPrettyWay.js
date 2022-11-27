export function displayMsgTimeInPrettyWay(msgTime) {
    let msgTimeUseful = msgTime.split("T")[1].split('.')[0].split(':')

    return msgTimeUseful[0] + ':' + msgTimeUseful[1]
}