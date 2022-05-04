import React from "react";
import styled from "styled-components";

const ListBox = styled.ul`
  display: flex;
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
  margin-right: 1rem;
  border: 2px solid black;
  background-color: black;
  color: white;
  padding: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #454545;
  }
`;

export const QueryList = ({ handleClick }) => {
  return (
    <ListBox>
      <ListItem
        id="1"
        onClick={(event) => {
          handleClick(event, event.target.id);
        }}
      >
        Query 1
      </ListItem>
      <ListItem
        id="2"
        onClick={(event) => {
          handleClick(event, event.target.id);
        }}
      >
        Query 2
      </ListItem>
      <ListItem
        id="3"
        onClick={(event) => {
          handleClick(event, event.target.id);
        }}
      >
        Query 3
      </ListItem>
    </ListBox>
  );
};
