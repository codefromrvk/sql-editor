import React from "react";
import styled from "styled-components";
import { QueryList } from "./QueryList";
import { Result } from "./Result";
import { UseQueryContext } from "./QueryContext";

const AfterUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 10rem;
`;
const QueryBox = styled.div`
  /* background-color: grey; */
  width: 100%;

  textarea {
    border: none;
    resize: none;
    outline: 1px solid black;
  }
  button {
    background-color: #383838;
    display: block;
    color: white;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;
const ResultBox = styled.div``;

const queryTextList = [
  "SELECT Name FROM User_Table;",
  "SELECT * FROM User_Table;",
  "SELECT Name FROM User_Table ORDER BY Name ASC ;",
];

export const Query = () => {
  const { queryText, setQueryText, setQueryNum, isResult, setIsResult } =
    UseQueryContext();

  const handleInput = (event) => {
    setQueryText(event.target.value);
  };

  const handleClick = (event, inputText) => {
    setIsResult(false);
    setQueryNum(Number(inputText) - 1);
    setQueryText(queryTextList[Number(inputText) - 1]);
  };
  const handleRunClick = () => {
    setIsResult(true);
  };

  return (
    <AfterUploadWrapper>
      <QueryList handleClick={handleClick} />
      <QueryBox>
        <textarea
          autoFocus
          cols={100}
          rows={10}
          type="text"
          value={queryText}
          onInput={handleInput}
          placeholder="Enter your query here"
        />
        <button onClick={handleRunClick}>Run</button>
      </QueryBox>
      {isResult &&
        (queryText ? (
          <ResultBox>
            <Result />
          </ResultBox>
        ) : (
          <h1>Please enter any Query</h1>
        ))}
    </AfterUploadWrapper>
  );
};
