import React from 'react';
import CardProject from "./CardProject";
import {Row, Col}from "reactstrap";

const FullProjects = ({currentTodos}) => {
    return (
        <Row className="mt-5">
            {
                currentTodos.map(todo => {
                    return (
                        <Col md={6} lg={4} sm={12} className="mb-4">
                            <CardProject key={todo.id}
                                         nombre={todo.nombre}
                                         descripcion={todo.descripcion}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    )
};

export default FullProjects;