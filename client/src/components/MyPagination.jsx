import React, { useState } from 'react';
import SquareForms from './SquareForms';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Количество элементов на странице
  const totalItems = 14; // Общее количество элементов
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Общее количество страниц

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
    <div style={{ padding: '0 0 100px 0' }}>
      <div
        style={{
          fontSize: '1rem',
          color: 'white',
          fontFamily: 'JetBrains Mono',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Showing {start + 1}-{end + 1 > totalItems ? totalItems : end + 1} of {totalItems} results
      </div>
      <SquareForms start={start} end={end} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </div>
  );
};

export default MyPagination;
