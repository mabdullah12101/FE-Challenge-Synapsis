import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePagination, totalPage }) {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePagination}
      pageCount={totalPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}
