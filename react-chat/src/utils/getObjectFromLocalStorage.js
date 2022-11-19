export function getObjectFromLocalStorage(obj, elemIndex) {
    return JSON.parse(window.localStorage.getItem(obj)).at(elemIndex)
}
