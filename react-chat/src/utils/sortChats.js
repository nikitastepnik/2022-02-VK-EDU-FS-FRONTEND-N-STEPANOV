export function sortChats(items) {
    let times = []
    for (let elem of items) {
        let lastMsgs = new Map()
        lastMsgs.set("name", elem)
        lastMsgs.set("time", JSON.parse(window.localStorage.getItem(elem)).at(-1).curTime)
        times.push(lastMsgs)
    }


    return times.sort(function (a, b) {
        return a.get("time") > b.get("time") ? -1 : 1
    })
}