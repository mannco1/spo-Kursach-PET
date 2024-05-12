import React, { useState } from 'react';
import SquareForms from './SquareForms';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const MyPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 29; // Количество элементов на странице
    const totalItems = 120; // Общее количество элементов
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Общее количество страниц

    // Генерируем массив страниц для отображения кнопок
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const calculateRange = (pageNumber) => {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage - 1;
        return [start, end];
    };
    const [start, end] = calculateRange(currentPage);

    return (
        <div style={{padding:' 0 0 100px 0'}}>
            <div style={{fontSize:'1rem',color:'white',fontFamily:'JetBrains Mono'}}>Showing {start+1}-{end} of {totalItems} results</div>
            <SquareForms  firstP={start} secondP={end} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    style={{ backgroundColor: 'gray', color: 'white', border: 'none', padding: '8px 16px', marginRight: '5px' }}
                >
                    Предыдущая страница
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        style={{
                            backgroundColor: currentPage === number ? 'black' : 'gray',
                            color:  currentPage === number ? 'red' : 'white',   
                            border: '3px solid gray',
                            padding: '8px 16px',
                            marginRight: '5px'
                        }}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    style={{ backgroundColor: 'gray', color: 'white', border: 'none', padding: '8px 16px' }}
                >
                    Следующая страница
                </button>
            </div>
        </div>
    );
};

export default MyPagination;
