import React from 'react';
import {PaginationItem, PaginationLink} from "reactstrap";
import Pagination from "reactstrap/es/Pagination";
import "./styles/PaginationProy.css"

const PaginationProy = ({proy, perPage, onClick}) => {
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(proy.length / perPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="d-flex justify-content-center mt-3">
            <Pagination>
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {pageNumbers.map((number) => {
                    return (
                        <PaginationItem>
                            <PaginationLink
                                key={number}
                                id={number}
                                onClick={onClick}
                            >
                                {number}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default PaginationProy;