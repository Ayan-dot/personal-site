import React, {} from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Navigation.css";

const Navigation = (props) => {
  const navdata = props.data;
  return (
    <>
      <Navbar expand="lg" className="navbar-contain sticky-top pt-2 mb-3">
        <Navbar.Brand href="/" className="navbrand">
          <img src={navdata.brand.icon} alt="AH" />
        </Navbar.Brand>
        <Navbar.Text className = "">
           {navdata.brand.label}
        </Navbar.Text>
        <Navbar.Toggle data-toggle="collapse" data-target="#basic-navbar-navs" aria-controls="basic-navbar-nav" className="navbar-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="">
            {navdata.links.map((x) => (
              <Nav.Link key={x.name} href={x.href}>{x.name}</Nav.Link>
            ))}
            <Nav.Link key={'contact'} onClick={()=>{props.change(true)}} className="d-xs-block d-lg-none">contact</Nav.Link>
            <NavDropdown title="links">
              {navdata.socials.map((x) => (
                <NavDropdown.Item key={x.name} href={x.href}>{x.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
            <Button tabIndex="-1" onClick={()=>{props.change(true)}} className="ms-2 contact-button d-none d-lg-block"><span>contact me</span></Button>
      </Navbar>
    </>
  );
};

export default Navigation;
