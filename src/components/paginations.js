
import React from 'react';
import { Link } from "gatsby"

const Pagination = ({ previousPage, nextPage }) => {

    return (
        <div className="woocommerce__product-archive-pagination">
            {previousPage != '' ? <Link className="button" to={previousPage} >Prev</Link> : ''}
            {nextPage != '' ? <Link className="button" to={nextPage} >Next</Link> : ''}
        </div>
    )
}

export default Pagination;
