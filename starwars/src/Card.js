import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function Cards (props) {
    return (
        <div>
            <Card>
                <CardImg></CardImg>
                <CardTitle>This is the title</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>This is a Card</CardText>
                <CardBody></CardBody>
            </Card>
        </div>
    )
};

export default Cards;