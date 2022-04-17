import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = (props) => {
  const { toggle, handleToggle } = props;
  
  return (
    <LinksCont className={toggle ? "active" : ""}>
      <LinkItem onClick={handleToggle}>
        <Link to="/create">Create</Link>
      </LinkItem>

     
    
    </LinksCont>
  );
};

const LinksCont = styled.ul`
  align-items: center;

  @media (max-width: 900px) {
    padding: 20px;
    position: absolute;
    top: 10vh;
    right: 0;
    height: auto;
    display: none;
    width: 100%;
    background: #000;
    color: #fff;
    transition: all 2s;

    &.active {
      display: block;
      transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
      transform: scale(0);
      animation-name: showIn;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: both;
      animation-delay: 0.2s;

      @keyframes showIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-left: 40px;
  a {
    color: var(--Color-3);
  }

  /* .input_field {
    position: relative;

    .search_icon {
      position: absolute;
      top: 8px;
      left: 7px;
      width: 25px;
      height: 25px;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--White);
      border-radius: 50px;
    }

    input {
      padding: 13px 13px 13px 35px;
      border: 0.1rem solid var(--Blue-3);
      outline: none;
      background: var(--Blue-3);
      border-radius: 8px;
      transition: all 0.5s;

      &:hover {
        background: var(--White);
      }
    }
  } */

  .cta {
    background: #000;
    padding: 10px 17px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
      background: #fff;
      color: #000;
    }

    &.outline {
      background: transparent;
      padding: 10px 17px;
      color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      transition: all 0.5s;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }

  @media (max-width: 900px) {
    display: block;
    margin: 20px 0;
    transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
    transform: scale(0);
    animation-name: showIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: both;
    animation-delay: 0.2s;

    @keyframes showIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export default Links;
