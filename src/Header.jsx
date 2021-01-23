/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import './styles/header.scss';

const Header = () => {
  return (
    <Row id="header">
      <Col md={{ span: 6, offset: 3 }}>
        <h1 className="display-4 text-center"><a href="/">Jerusha Johnson</a></h1>
        <h5 className="text-muted text-center">Coffee Drinker, Product Thinker, Chronic Doodler</h5>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Who Am I?</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/jerushajohnson/">LinkedIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Résumé</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Work" id="work-dropdown">
            <NavDropdown.Header>Case Studies</NavDropdown.Header>
            <NavDropdown.Item>User Accounts</NavDropdown.Item>
            <NavDropdown.Item>theBoardList</NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Header>Projects</NavDropdown.Header>
            <NavDropdown.Item>Project 1</NavDropdown.Item>
            <NavDropdown.Item>Project 2</NavDropdown.Item>
            <NavDropdown.Item>Project 3</NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Header>Personal Work</NavDropdown.Header>
            <NavDropdown.Item>Periodic Table</NavDropdown.Item>
            <NavDropdown.Item>Pong</NavDropdown.Item>
            <NavDropdown.Item>I'm Here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
    </Row>
  );
};

export default Header;
