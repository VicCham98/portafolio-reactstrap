import React, {Fragment} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const CardInfo = () => {
    return (
        <Fragment>
            <Card className="shadow bg-white rounded-lg px-5 p-3">
                <CardBody className="text-center">
                    <CardTitle>Desarrollador Web</CardTitle>
                    <CardText>HTML/CSS | Bootstrap | Javascript | React | PHP | MySQL</CardText>
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default CardInfo;