export interface PaginationProps {
    current: number;
    total: number;
    countPerPage?: number;
    onChange?: (page: number) => void
}