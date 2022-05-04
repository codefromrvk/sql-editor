import React, { useState } from "react";
import styled from "styled-components";
import { FileUploader } from "react-drag-drop-files";
import upload from "../assets/upload.png";
import { Query } from "./Query";
import { QueryProvider } from "./QueryContext";
// import { useNavigate } from "react-router-dom";

const EditorMainContainer = styled.div``;

const BeforeUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputBox = styled.div`
  width: 40%;
  margin: 2rem auto;
  height: 40vh;
  padding: 1rem;
  background: #f4f2f2;
`;
const InnerContainer = styled.div`
  height: 300px;
  background: #c4c4c4;
  border: 2px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 0.5rem;
    color: #969696;
    font-size: 0.8rem;
  }
`;
const UploadImg = styled.img``;
const InfoText = styled.div`
  margin-top: 1rem;
  b:hover {
    cursor: pointer;
  }
`;

const StartBtn = styled.button`
  background-color: #383838;
  display: inline;
  color: white;
  border-radius: 2rem;
  padding: 1rem;
  /* width: 15%; */
  cursor: pointer;
  margin: 2rem;
`;

const fileTypes = ["sql", "sqlite", "csv"];

export const Editor = () => {
  //   const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const handleClick = () => {
    // navigate("/");
    setFile({ a: "hi" });
  };
  return (
    <EditorMainContainer>
      {file ? (
        <QueryProvider>
          <Query />
        </QueryProvider>
      ) : (
        <BeforeUploadWrapper>
          <InputBox>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <InnerContainer>
                <UploadImg src={upload} />
                <InfoText>
                  <b>Choose a file </b>or drag it here.
                </InfoText>
                <p>Supported files : sql,sqlite</p>
              </InnerContainer>
            </FileUploader>
          </InputBox>
          <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
          <StartBtn onClick={handleClick}>Start with existing data</StartBtn>
        </BeforeUploadWrapper>
      )}
    </EditorMainContainer>
  );
};
