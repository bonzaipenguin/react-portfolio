import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, CardDeck, Card } from 'react-bootstrap';

const PersonalList = [
  {
    id: 0,
    name: "Periodic Table",
    description: "I made a study guide for Chem 101. It has tests for symbols and names. Plus a full table view.",
    img: 'https://iupac.org/wp-content/uploads/2015/09/iupac-period-table-of-elements.png',
    url: '/'
  },
  {
    id: 1,
    name: "Pong",
    description: "I played around with some game logic and basic JavaScript functions to make a throwback",
    img: 'https://www.shortlist.com/media/imager/201905/29420-posts.article_md.jpg',
    url: '/'
  }
  ,
  {
    id: 2,
    name: "I'm Here",
    description: "This was an early experiment in using CSS animations",
    img: 'https://images.unsplash.com/photo-1601296200639-89349ce76a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  }
];

const PersonalWorks = () => {
  return (
    <Row>
      <Col sm={12}>
        <CardDeck>
          {
            PersonalList.map(item => (
              <Card key={item.id}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.company}</Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </CardDeck>
      </Col>
    </Row>
  )
};

export default PersonalWorks;