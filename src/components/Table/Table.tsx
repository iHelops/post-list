import style from './Table.module.css';
import {KeyInterface, TableProps} from './types';
import {Key, useState} from "react";
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Pagination from "../Pagination/Pagination";


const Table = <T extends KeyInterface>({columns, data, pagination}: TableProps<T>) => {
    const [sortedColumn, setSortedColumn] = useState<Key>();
    const [currentPage, setCurrentPage] = useState<number>(pagination?.defaultPage || 1) 
    
    const getData = () => {
        let newData = [...data]
        
        if (pagination) {
            const startIndex = (currentPage - 1) * pagination.count
            newData = newData.slice(startIndex, startIndex + pagination.count)
        }
        
        const sorter = columns.find(column => column.key === sortedColumn)?.sorter;
        return sorter ? newData.sort(sorter) : newData;
    }
    
    const onSort = (columnKey: Key) => {
        const column = sortedColumn === columnKey ? undefined : columnKey;
        setSortedColumn(column);
    }
    
    const onPageChange = (page: number) => {
        setCurrentPage(page)
        if (pagination?.onChange) pagination.onChange(page)
    }

    return (
        <div className={style.tableWrapper}>
            <div className={style.tableContainer}>
                <table className={style.table}>
                    <TableHeader columns={columns} currentSortColumn={sortedColumn} onSort={onSort}/>
                    <TableBody columns={columns} data={getData()}/>
                </table>
            </div>
            
            {pagination && (
                <Pagination
                    current={currentPage}
                    total={data.length}
                    countPerPage={pagination.count}
                    onChange={onPageChange}
                />
            )}
        </div>
    )
}

export default Table;