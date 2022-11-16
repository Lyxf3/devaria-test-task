import {DataItem, tSortField, tSortType} from "../../app/types";
import {TableItem} from "../tableItem";

export const filterEntries = (data: Array<DataItem>, value: string) => {
    if (!value) {
        return data
    }
    return data.filter(({API, Category}) => API.toString().startsWith(value) || Category.toString().startsWith(value))
}

export const mapEntries = (data: Array<DataItem>) => {
    return data.map((item: DataItem, index: number) =>
        <TableItem
            key={index}
            index={index}
            item={item}/>
    )
}

export const sortEntries = (data: Array<DataItem>, sortField: tSortField, sortType: tSortType) => {
    return data.sort((a, b) => {
        let value = 0
        if (a[sortField] < b[sortField])
            value = sortType === "asc" ? -1 : 1
        if (a[sortField] > b[sortField])
            value = sortType === "asc" ? 1 : -1
        return value;
    })
}