import React, { Fragment, useState } from 'react';
import '../components/styles/NavigationBar.css'
import { Link } from "react-scroll";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavigationBar = () => {

    const handleClick = (e) => {
        e.preventDefault();
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Fragment>
            <Navbar light expand="md" style={{backgroundColor: '#33c1d9ff'}} fixed="top">
                <NavbarBrand style={{color: "#fff"}} href="/">Victor Chambilla</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className="text-center" isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{color: "#fff"}} href="/" disabled>Resumen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#fff"}} href="/" onClick={handleClick}>
                                <Link
                                    activeClass ="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Proyectos
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#fff"}} href="/" onClick={handleClick}>
                                <Link
                                    activeClass ="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Acerca
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: "#fff"}} href="/" onClick={handleClick}>
                                <Link
                                    activeClass ="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                Contacto
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </Fragment>
    );
};

export default NavigationBar;

/*
<Link
    activeClass ="active"
    to="main"
    spy={true}
    smooth=[true]
    offset={-70}
    duration={500}
>
    Contacto
</Link>
* */