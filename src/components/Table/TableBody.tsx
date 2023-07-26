import { ReactNode } from "react"
import { KeyInterface, TableBodyProps } from "./types"

const TableBody = <T extends KeyInterface>({columns, data}: TableBodyProps<T>) => {
    return (
        <tbody>
            {data.map(item => (
                <tr key={item.key}>
                    {columns.map(column => (
                        <td key={column.key.toString()}>
                            {item[column.dataIndex] as ReactNode}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody