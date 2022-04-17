import styled from "styled-components";

export const Cta = styled.div`
  a {
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
`;
// export const Cont = styled.div`
// /* p  */
// `;