import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import logo from "../../Assets/mockups/Logo.svg";
import {
  RiMessengerLine,
  RiYoutubeLine,
  RiWhatsappLine,
  RiFacebookLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <Cont>
      <Left>
        <Logo>
          <Link to="/">
                      {/* <img src={logo} alt="" /> */}
                      Logo
          </Link>
        </Logo>
        <p className="about">
          {/* raroin is a shared liquidity NFT market smart contract */}
        </p>
        <div className="social_links">
          <Link to="/">
            <RiFacebookLine />
          </Link>
          <Link to="/">
            <RiMessengerLine />
          </Link>
          <Link to="/">
            <RiWhatsappLine />
          </Link>
          <Link to="/">
            <RiYoutubeLine />
          </Link>
        </div>
      </Left>

      <Right>
        <Links>
          <h3 className="heading">Raroin</h3>
          <ul className="links">
            <li className="link">
              <Link to="/contact">Marketplace</Link>
            </li>
          </ul>
        </Links>
        <Links>
          <h3 className="heading">Assets</h3>
          <ul className="links">
            <li className="link">
              <Link to="/contact">Profile</Link>
            </li>
            <li className="link">
              <Link to="/shop">Creators</Link>
            </li>
            <li className="link">
              <Link to="/shop">Collections</Link>
            </li>
            <li className="link">
              <Link to="/shop">Activity</Link>
            </li>
          </ul>
        </Links>
        <Links>
          <h3 className="heading">Company</h3>
          <ul className="links">
            <li className="link">
              <Link to="/contact">Upload Types</Link>
            </li>
            <li className="link">
              <Link to="/shop">Upload</Link>
            </li>
            <li className="link">
              <Link to="/shop">Connect Wallets</Link>
            </li>
            <li className="link">
              <Link to="/shop">Item details</Link>
            </li>
          </ul>
        </Links>
      </Right>
      {/* <div className="copy_right">Copyright 2022. Coded by Z3phyron_Snides. </div> */}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 5% 8%;
position: absolute;
  margin-bottom: -200px;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Logo = styled.div`
  margin-bottom: 20px;
  a {
    color: var(--Color-1);
    transition: all 0.5s;

    &:hover {
      color: var(--Color-2);
    }
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  align-items: flex-start;

  a {
    color: var(--Color-4);
    transition: all 0.5s;

    &:hover {
      color: var(--Color-2);
    }
  }

  .links {
    li {
      margin-bottom: 10px;
    }
  }
`;
const Left = styled.div`
  .social_links {
    margin-top: 20px;
    display: flex;

    a {
      width: 50px;
      height: 50px;
      background: var(--gray-blue);
      display: flex;
      justify-content: center;
      border-radius: 50px;
      margin-right: 20px;
      color: var(--black);
      font-size: 20px;
      align-items: center;
    }
  }
`;
const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    list-style: none;
  }
`;
// const SocialLinks = styled.div`
//   display: flex;
// `;

export default Footer;
