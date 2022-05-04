import React from "react";
import { UseQueryContext } from "./QueryContext";
import "./table.css";
import query1 from "../assets/query1.png";
import query2 from "../assets/query2.png";
import query3 from "../assets/query3.png";

const ImgList = [query1, query2, query3];

export const Result = () => {
  const { queryNum } = UseQueryContext();

  return (
    <>
      <img
        src={ImgList[queryNum]}
        style={{ width: "100%", marginTop: "2rem" }}
        alt="result"
      />
    </>
  );
};
