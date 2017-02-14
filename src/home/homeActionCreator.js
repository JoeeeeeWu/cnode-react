export function getTopicList (listData) {
    return {
        type : 'TOPICS',
        listData
    }
}

export function getNextTopicList (listData) {
    return {
        type : 'NEXT_PAGE_TOPICS',
        listData
    }
}

export function getScrollTop(scrollTop){
    return {
        type : 'MARK_SCROLL',
        scrollTop
    }
}

export function getTab(tab){
    return {
        type : 'MARK_TAB',
        tab
    }
}

export function getPage(page){
    return {
        type : 'MARK_PAGE',
        page
    }
}

