import React,{ useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Product from "./product/index"
export default function images(props) {
    const {data}=props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentItems, setCurrentItems] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageCount, setPageCount] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =8;
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,data]);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className='images'>
            {currentItems.map(image=>{
                return(
                    <Product imgproduct={image}/>
                )
            })}
        </div>
        <ReactPaginate
          breakLabel=""
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-num"
          previousClassName='page-num'
          nextClassName='page-num'
          activeLinkClassName='active'
        />
      </>
    );
}
