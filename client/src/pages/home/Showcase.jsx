import React from "react";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import {Link} from "react-router-dom"

const Showcase = () => {
  return (
    <Cont>
          <Text>
              <h3 className="heading">Title</h3>
        <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed eveniet tempore repellat deleniti cum, fugiat iure voluptatum error fuga?</p>
        <Cta>
          <Link to='/' className="outline">Button</Link>
        </Cta>
      </Text>
      <Image>image</Image>
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  /* justify-content: space-between; */
  align-items: center;
  /* border-radius: 50px; */
  /* background: #32c; */

`;
const Text = styled.div`
  /* p  */
  .heading {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .desc {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;
const Image = styled.div`
  /* p  */
  text-align: center;
`;

export default Showcase;
