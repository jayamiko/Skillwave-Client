"use client";

import { INFO_APP } from "@/constants/app";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownMenu from "../inputs/DropdownMenu";
import { courses } from "@/constants/course";
import { shops } from "@/constants/shop";
import Button from "../buttons/Button";

function CNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="mr-24">{INFO_APP.Name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-10">
            <Nav.Link href="#home">Home</Nav.Link>
            <DropdownMenu label="Course" items={courses} />
            <DropdownMenu label="Shop" items={shops} />
          </Nav>

          <Button>Log in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
