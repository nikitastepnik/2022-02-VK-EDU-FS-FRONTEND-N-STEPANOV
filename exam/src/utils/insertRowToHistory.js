import {insertLocalStorageHistoryValue} from "./insertLocalStorageHistoryValue";

export function insertRowToHistory(origin, target, origin_value, target_value) {
    let historyTranslations = insertLocalStorageHistoryValue()

    historyTranslations.push({
        "origin": origin, "target": target,
        "origin_value": origin_value, "target_value": target_value
    })

    window.localStorage.setItem(String("history"), JSON.stringify(historyTranslations))
}