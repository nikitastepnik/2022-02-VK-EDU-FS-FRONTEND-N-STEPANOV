export function insertLocalStorageHistoryValue() {
    return window.localStorage.getItem("history") ?
        JSON.parse(window.localStorage.getItem("history"))
        : []
}