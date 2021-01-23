import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';

const CaseStudyList = [
  {
    id: 0,
    name: "User Accounts",
    company: "KQED",
    img: 'https://images.unsplash.com/photo-1540153448870-af780343526e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  },
  {
    id: 1,
    name: "Application Flow",
    company: "theBoardlist",
    img: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2247&q=80',
    url: '/'
  }
];

const CaseStudyGroup = () => {
  return (
    <Row className="spacing-top spacing-bottom">
      <Col sm={12}>
        <h5 className="text-muted section-title">Case Studies</h5>
        <CardDeck>
          {CaseStudyList.map(item => (
            <Card key={item.id} className="box-shadow">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="small">{item.company}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Col>
    </Row>
  )
};

export default CaseStudyGroup;