import React, { useState, useEffect } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import './styles/header.scss';

const Header = () => {
  return (
    <Row id="header">
      <Col md={{ span: 6, offset: 3 }}>
        <h1 className="display-4 text-center"><a href="/">Jerusha Johnson</a></h1>
        <h5 className="text-muted text-center">Coffee Drinker, Product Thinker, Chronic Doodler</h5>
        <ul className="list-inline text-center">
          <li className="list-inline-item"><a href="/">Who Am I?</a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/jerushajohnson/" target="_blank">LinkedIn</a></li>
          <li className="list-inline-item"><a href="/" target="_blank">Résumé</a></li>
          <li className="list-inline-item">
            <Dropdown>
              <Dropdown.Toggle>Work</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>Case Studies</Dropdown.Header>
                <Dropdown.Item>User Accounts</Dropdown.Item>
                <Dropdown.Item>theBoardList</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Projects</Dropdown.Header>
                <Dropdown.Item>Project 1</Dropdown.Item>
                <Dropdown.Item>Project 2</Dropdown.Item>
                <Dropdown.Item>Project 3</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Personal Work</Dropdown.Header>
                <Dropdown.Item>Periodic Table</Dropdown.Item>
                <Dropdown.Item>Pong</Dropdown.Item>
                <Dropdown.Item>I'm Here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Header;
