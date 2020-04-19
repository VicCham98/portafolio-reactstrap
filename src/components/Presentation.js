import React from 'react';
import logo from "../assets/images/avatar.png";
import {Jumbotron, Container, Row, Col} from "reactstrap";
import CardInfo from "./CardInfo";
import './styles/Presentation.css'

const Presentation = () => {
    return (
        <section className="pt-5">
            <Jumbotron>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <img src={logo} alt="victor" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={7} lg={8} md={10}  className="mt-3 mx-auto">
                            <CardInfo/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </section>
    );
};

export default Presentation;