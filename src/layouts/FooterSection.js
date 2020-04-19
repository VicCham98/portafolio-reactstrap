import React from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

const FooterSection = () => {
    return (
        <footer style={{backgroundColor: "#f0596eff"}}>
            <Container className="py-3">
                <Row>
                    <Col className="d-flex justify-content-center text-white">
                        <strong>
                            Copyright © Victor Chambilla 2020
                        </strong>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterSection;