import React from "react";
import { Row, Col } from "antd";
import { cards } from "../mock/cards";


const CardTypes = ({cardType}) => {
    return (
        <Row>
            {cards.map(card => {
                return <Col span={6}><img src={card.src} alt={card.alt} className={`card ${card.name === cardType ? "active" : "inactive"}`}></img></Col>
            })}
        </Row>
    );
};

export default CardTypes;