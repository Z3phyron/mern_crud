import React from "react";
import styled from "styled-components";

const categories = [
  {
    path: "/",
    title: "title",
  },
  {
    path: "/",
    title: "title",
  },
  {
    path: "/",
    title: "title",
  },
  {
    path: "/",
    title: "title",
  },
];

const CategoryCard = () => {
  return (
    <Cont>
      {categories.map((category, index) => (
        <Card key={index}>
          <div>
            <h5>{category.title}</h5>
          </div>
        </Card>
      ))}
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 5% 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Card = styled.div`
  /* p  */
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: black;
  color: #fff;
  height: 100px;

  @media (max-width: 900px) {
   width: 100px;
   height: 50px;
   border-radius: 10px;
  }
`;

export default CategoryCard;
