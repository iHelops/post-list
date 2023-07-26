import {KeyInterface, TableHeaderProps } from "./types"
import {Key} from "react";
import style from './Table.module.css'

const TableHeader = <T extends KeyInterface>({columns, currentSortColumn, onSort}: TableHeaderProps<T>) => {
    const onSortHandler = (columnKey: Key) => {
        if (onSort) onSort(columnKey)
    }
    
    return (
        <thead>
            <tr>
                {columns.map(column => (
                    <th key={column.key.toString()}>
                        <span>{column.title}</span>
                        {column.sorter && (
                            <span
                                onClick={() => onSortHandler(column.key)}
                                className={[style.sort, column.key === currentSortColumn ? style.active : ''].join(' ')}
                            >▼</span>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader