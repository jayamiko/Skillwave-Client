"use client";

import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

type Item = {
  href: string;
  name: string;
};

interface Props {
  label: string;
  items: Item[];
}

function DropdownMenu(props: Props) {
  return (
    <NavDropdown title={props.label} id="basic-nav-dropdown">
      {props.items.map((item: Item, i: number) => {
        return (
          <NavDropdown.Item key={i} href={item.href}>
            {item.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

export default DropdownMenu;
