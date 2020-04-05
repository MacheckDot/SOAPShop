import PropTypes from "prop-types"
import React, { useState} from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = ({ siteTitle }) => {
   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
      <NavbarBrand href="/">Miris Saponelli</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/soaps">Our soaps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Miris</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
  
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
