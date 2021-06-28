import React, {} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navigation.css";

const Navigation = (props) => {
  const navdata = props.data;
  return (
    <>
      <Navbar bg="light" expand="lg" className=" navbar p-3 justify-content-between">
        <Navbar.Brand href="/" className="navbrand nav justify-content-center order-0">
          <img src={navdata.brand.icon} alt="AH" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center order-2">
          <Nav className="justify-content-center">
            {navdata.links.map((x) => (
              <Nav.Link href={x.href}>{x.name}</Nav.Link>
            ))}
            <NavDropdown title="links">
              {navdata.socials.map((x) => (
                <NavDropdown.Item href={x.href}>{x.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text className = "order-1 order-lg-3">
           {navdata.brand.label}
          </Navbar.Text>
      </Navbar>
    </>
  );
};

export default Navigation;
