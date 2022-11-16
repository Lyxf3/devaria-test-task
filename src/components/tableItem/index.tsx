import {tTableItem} from "../../app/types";


export const TableItem = ({index, item}: tTableItem) => {
    const {API, Description, Category} = item
    return (
        <tr key={index}>
            <td>
                {API}
            </td>
            <td>
                {Description}
            </td>
            <td>
                {Category}
            </td>
        </tr>
    )
}