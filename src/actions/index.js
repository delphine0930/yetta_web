import { SAVE_SEARCH_STRING } from "./types.js"; 

export function saveSearchString(string) {
    return {
        type: SAVE_SEARCH_STRING,
        payload: string
    }
}