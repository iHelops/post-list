import { Key } from "react";

export interface KeyInterface {
    key: Key
}

export type ColumnsType<T> = {
    key: Key;
    dataIndex: keyof T;
    title: string;
    sorter?: (a: T, b: T) => number
}[];

export interface TableProps<T extends KeyInterface> {
    columns: ColumnsType<T>;
    data: T[];
    pagination?: {
        count: number;
        defaultPage: number;
        onChange?: (page: number) => void;
    };
}

export interface TableHeaderProps<T extends KeyInterface> {
    columns: ColumnsType<T>;
    currentSortColumn?: Key;
    onSort?: (columnKey: Key) => void;
}

export type TableBodyProps<T extends KeyInterface> = TableProps<T>