import React from 'react';

interface IProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (arg0: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: IProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
