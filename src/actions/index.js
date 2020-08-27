import { FETCH_BLOG, SAVE_SEARCH_TAG } from "./types.js"; 

export function fetchBlog(blogs){
    // response = axios.get('3.34.47.175:')
}

export function saveSerachTag(tag) {
    return {
        type: SAVE_SEARCH_TAG,
        payload: tag
    }
}