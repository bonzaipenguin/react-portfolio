import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';

const ProjectList = [
  {
    id: 0,
    name: "Project 1",
    company: "Company 1",
    tags: ["UX Design", "User Testing"],
    img: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  },
  {
    id: 1,
    name: "Project 2",
    company: "Company 2",
    tags: ["UX Design", "User Testing"],
    img: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  },
  {
    id: 2,
    name: "Project 3",
    company: "Company 3",
    tags: ["UX Design", "User Testing"],
    img: 'https://images.unsplash.com/photo-1604440976150-c12352c982ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  }
];

const SmallProjects = () => {
  return (
    <Row>
      <Col sm={12}>
        <CardDeck>
          {ProjectList.map(item => (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.company}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Col>
    </Row>


  )
};

export default SmallProjects;