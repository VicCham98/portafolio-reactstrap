import React, {Fragment, useState, useEffect}  from 'react';
import projects from '../assets/projects.json'
import FullProjects from "./FullProjects";
import PaginationProy from "./PaginationProy";

const Projects = () => {
    const [ currentPage, setcurrentPage ] = useState(1);
    const [ perPage, setPerPage] = useState(3);
    const [proy, setproy] = useState([projects]);
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = proy.slice(indexOfFirstTodo, indexOfLastTodo);

    useEffect(() => {
        setproy(projects);
    }, []);

    const handleClick = e => {
        setcurrentPage(e.target.id);
    };

    return (
        <Fragment>
            <div id="projects">
                <h1>Proyectos</h1>
                <FullProjects
                    currentTodos={currentTodos}
                />
                <PaginationProy
                    proy={proy}
                    perPage={perPage}
                    onClick={handleClick}
                />
            </div>
        </Fragment>
    );
};

export default Projects;