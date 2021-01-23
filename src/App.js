/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header.jsx';
import CaseStudyGroup from './CaseStudyGroup.jsx';
import SmallProjects from './SmallProjects.jsx';
import PersonalWorks from './PersonalWorks.jsx';

const App = () => {
  return (
    <Container>
      <Header />
      <CaseStudyGroup />
      <SmallProjects />
      <PersonalWorks />
    </Container>
  )
};

render(<App />, document.getElementById("root"));
