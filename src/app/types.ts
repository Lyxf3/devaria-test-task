//Data
export type DataItem = {
    Description: string,
    Category: string
    HTTPS: boolean,
    Auth: string,
    Cors: string,
    Link: string,
    API: string,
}

//Table
export type tTableHeaders = {
    title: string
    sort: boolean
}

export type tTableItem = {
    item: DataItem
    index: number
}


//State
export type tEntriesState = {
    filter: string
    sortField: tSortField
    sortType: tSortType
}

export type tSortField = "API" | "Category"

export type tSortType = "asc" | "desc"