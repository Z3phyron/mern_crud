import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import Links from "./Links";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Nav className={navbar ? "isActive" : ""}>
      <Logo>
        <Link to="/">
          {/* <img src={logo} alt="" /> */}
          Logo
        </Link>
      </Logo>

      <Links toggle={toggle}  handleToggle={ handleToggle} />

      <Toggle onClick={handleToggle}>
        {toggle ? <CgClose /> : <CgMenuMotion />}
      </Toggle>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--White);
  box-shadow: 0 1px 1px 1px var(--Blue-3);
  height: 15vh;
  padding: 3% 5%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: 0.5s;
  z-index: 999;
  &.isActive {
    background: var(--White);
    height: 10vh;
    box-shadow: 0 1px 2px 1px #323;
  }
  @media (max-width: 900px) {
    height: 10vh;
  }
`;
const Toggle = styled.div`
  display: none;
  font-size: 30px;
  transition: all 2s;
  color: var(--Blue-2);
  @media (max-width: 900px) {
    display: block;
    transition: all 2s;
  }
`;
const Logo = styled.div`
  img {
    width: 100px;
  }

  a {
    color: var(--Color-3);
  }
`;

export default Navbar;
