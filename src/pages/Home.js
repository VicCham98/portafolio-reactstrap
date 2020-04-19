import React, {Fragment} from 'react';
import Projects from "../components/Projects";
import About from "../components/About";
import {Row, Col } from 'reactstrap';
import Contacto from "../components/Contacto";

const Home = () => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <Projects/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className="mx-auto">
                    <About/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col lg={9} className="mx-auto">
                    <Contacto/>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;