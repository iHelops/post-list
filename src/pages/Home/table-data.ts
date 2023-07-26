import { ColumnsType } from "../../components/Table/types";

export interface TableData {
    key: number;
    title: string;
    body: string;
}

export const columns: ColumnsType<TableData> = [
    {
        key: 'id',
        dataIndex: 'key',
        title: 'ID',
        sorter: (a, b) => a.key - b.key
    },
    {
        key: 'title',
        dataIndex: 'title',
        title: 'Заголовок',
        sorter: (a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0
        }
    },
    {
        key: 'body',
        dataIndex: 'body',
        title: 'Описание',
        sorter: (a, b) => {
            if (a.body < b.body) return -1;
            if (a.body > b.body) return 1;
            return 0
        }
    }
]