import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";

const CardProject = ({nombre, descripcion}) => {
    return (
        <Card body={true} className="shadow">
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle>{nombre}</CardTitle>
                <CardSubtitle>{descripcion}</CardSubtitle>
                <Button>Ver</Button>
            </CardBody>
        </Card>
    );
};

export default CardProject;