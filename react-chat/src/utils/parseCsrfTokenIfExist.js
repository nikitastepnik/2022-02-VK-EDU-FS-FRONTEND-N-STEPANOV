export function parseCsrfTokenIfExist() {
    if (document.cookie) {
        return document.cookie.match(/csrftoken=([\w-]+)/)[0].split("=")[1]
    }
}