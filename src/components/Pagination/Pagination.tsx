import {PaginationProps} from "./types";
import style from './Pagination.module.css'
import {useMemo} from "react";

const Pagination = ({current, total, onChange, countPerPage = 10}: PaginationProps) => {
    const pages = useMemo(() => {
        const maxPages = Math.ceil(total / countPerPage);
        return Array.from({length: maxPages}, (_, i) => i + 1)
    }, [total, countPerPage])
    
    const onPageClick = (page: number) => {
        if (onChange) onChange(page)
    }
    
    const onPrevClick = () => {
        if (current === 1) return;
        if (onChange) onChange(current - 1)
    }
    
    const onNextClick = () => {
        if (current === pages.length) return;
        if (onChange) onChange(current + 1)
    }
    
    return (
        <div className={style.pagination}>
            <button onClick={onPrevClick}>❮</button>
            <ul className={style.pages}>
                {pages.map(page => (
                    <li
                        key={page}
                        className={current === page ? style.active: ''}
                        onClick={() => onPageClick(page)}
                    >{page}</li>
                ))}
            </ul>
            <button onClick={onNextClick}>❯</button>
        </div>
    );
};

export default Pagination;