import {useAppDispatch, useAppSelector, useRequest} from "../../app/hooks";
import { filterEntries, mapEntries, sortEntries } from "./services";
import { actions, selectEntries } from "../../redux/entriesSlice";
import {tTableHeaders} from "../../app/types";
import { fetchItems } from "../../app/fetch";
import styles from './style.module.scss'

export const Table = () => {
    const tableHeaders: Array<tTableHeaders> = [
        {
            title: "API",
            sort: true
        },
        {
            title: "Description",
            sort: false
        },
        {
            title: "Category",
            sort: true
        },
    ]
    const [data, loading, error] = useRequest(fetchItems)
    const dispatch = useAppDispatch()

    const {sortField, sortType, filter} = useAppSelector(selectEntries);

    if (loading) return <h2>Loading</h2>
    if (error) return <h2>Error</h2>

    return (
        <table className={styles.flTable}>
            <thead className={styles.tableHeader}>
                <tr className={styles.HeaderItem}>
                    {tableHeaders.map((item: tTableHeaders, index: number) => {
                        const {title, sort} = item
                        return (
                            <th key={index}
                                className={styles.header_item}
                                onClick={() => {
                                    // @ts-ignore
                                    if (sort) dispatch(actions.sort(title))
                                }}>
                                {title}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody className={styles.table_body}>
                {data && mapEntries(sortEntries(filterEntries(data.entries, filter), sortField, sortType))}
            </tbody>
        </table>
    )
}

