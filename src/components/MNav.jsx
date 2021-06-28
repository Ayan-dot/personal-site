import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,

} from "react-bootstrap";
import "./Mnav.css";

const MNav = (props) => {
  const [toggled, changetoggle] = useState(0);
  const toggle = () => changetoggle(!toggled);
  return (
    <>
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <img src={props.data.brand} className="navbrand" alt="AH" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} />
        <Nav>
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/projects">projects</Nav.Link>
          <NavDropdown title="links">
            <NavDropdown.Item href="http://linked.in/ayanhafeez">
              linkedin
            </NavDropdown.Item>
            <NavDropdown.Item href="http://github.com/ayan-dot">
              github
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/resume">resume</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default MNav;
