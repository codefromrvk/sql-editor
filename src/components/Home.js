import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import sqlhero from "../assets/sqlhero.png";
import rightarrow from "../assets/rightarrow.png";

export const HeroContainer = styled.div`
  display: flex;
  margin: 0 7rem;
  padding: 0 2rem;
`;

const HeroImg = styled.img`
  flex: 50%;
  max-width: 600px;
`;

const HeroText = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 3rem;
  }
  span {
    font-size: 1rem;
    margin: 2rem 0;
    color: grey;
  }
`;

const EditorNav = styled.button`
  background-color: #383838;
  display: inline;
  color: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 28%;
  cursor: pointer;
  span {
    font-size: 1rem;
    color: white;
  }
  img {
    margin-left: 0.2rem;
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/editor");
  };
  return (
    <HeroContainer>
      <HeroText>
        <div>Query on the go.</div>
        <div>Try and test all your</div>
        <div> queries at one place.</div>
        <span> Simple &amp; easy to use SQL editor</span>
        <EditorNav onClick={handleClick}>
          <span>Query Now</span> <img src={rightarrow} alt="right arrow"></img>
        </EditorNav>
      </HeroText>
      <HeroImg src={sqlhero}></HeroImg>
    </HeroContainer>
  );
};
