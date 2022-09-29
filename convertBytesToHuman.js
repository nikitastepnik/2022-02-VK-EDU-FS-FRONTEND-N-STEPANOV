/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (Number.isFinite(bytes) && bytes >= 0) {
        let counter = 0;
        let resStr;
        while (bytes >= 1024) {
            counter += 1;
            bytes /= 1024;
        }

        bytes = parseFloat(bytes.toFixed(2));
        switch (counter) {
            case 1:
                resStr = bytes + ' KB'
                break
            case 2:
                resStr = bytes + ' MB'
                break
            case 3:
                resStr = bytes + ' GB'
                break
            case 4:
                resStr = bytes + ' TB'
                break
            case 5:
                resStr = bytes + ' PB'
                break
            case 6:
                resStr = bytes + ' EB'
                break
            case 7:
                resStr = bytes + ' ZB'
                break
            case 8:
                resStr = bytes + ' YB'
                break
            default:
                resStr = bytes + ' B'
        }
        return resStr;
    } else {
        return false;
    }
}
