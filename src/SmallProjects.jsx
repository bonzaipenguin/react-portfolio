import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
import './styles/projects.scss';

const ProjectList = [
  {
    id: 0,
    name: "Visual Studio Error Pages",
    company: "Microsoft",
    tags: [<li key="0" className="list-inline-item">Visual Design</li>],
    img: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  },
  {
    id: 1,
    name: "Agile at Scale",
    company: "Microsoft",
    tags: [<li key="0" className="list-inline-item">UX Design</li>, <li key="1" className="list-inline-item">UI Design</li>, <li key="2" className="list-inline-item">Visual Design</li>],
    img: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  },
  {
    id: 2,
    name: "Comfy Office POC",
    company: "Comfy",
    tags: [<li key="0" className="list-inline-item">UX Design</li>, <li key="1" className="list-inline-item">UI Design</li>, <li key="3" className="list-inline-item">User Testing</li>],
    img: 'https://images.unsplash.com/photo-1604440976150-c12352c982ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    url: '/'
  }
];

const SmallProjects = () => {
  return (
    <Row className="spacing-top spacing-bottom">
      <Col sm={12}>
        <h5 className="text-muted section-title">Projects</h5>
        <CardDeck>
          {ProjectList.map(item => (
            <Card key={item.id} className="box-shadow">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="small">
                  <ul className="list-inline">{item.tags}</ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </Col>
    </Row>


  )
};

export default SmallProjects;