import Table from "../../components/Table/Table";
import {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPosts} from "../../store/thunks/post-thunk";
import {TableData, columns} from "./table-data";
import {useQuery} from "../../hooks/useQuery";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const query = useQuery()
    const navigate = useNavigate()
    const {posts} = useAppSelector(store => store.post)
    const dispatch = useAppDispatch()

    const [searchQuery, setSearchQuery] = useState<string>('')
    const tableData: TableData[] = useMemo(() => {
        return posts.map(post => ({
            key: post.id,
            title: post.title,
            body: post.body
        }))
    }, [posts])

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const getTableData = () => {
        if (searchQuery === '') return tableData
        return tableData.filter(item => {
            const values = Object.values(item)
            return values.some(value => value.toString().includes(searchQuery))
        })
    }

    const onPageChange = (page: number) => navigate('/?page=' + page)

    return (
        <>
            <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder='Поиск...'
                style={{marginBottom: 20}}
            />

            <Table
                columns={columns}
                data={getTableData()}
                pagination={{
                    count: 10,
                    defaultPage: Number(query.get('page')) || 1,
                    onChange: onPageChange
                }}
            />
        </>
    );
};

export default Home;