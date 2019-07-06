import React from "react";
import { css } from "@emotion/core";
import { RiseLoader } from "react-spinners";
import { loading } from "./Loading.module.css";
// css
const override = css`
  position: absolute;
  top: 45%;
  left: 45%;
`;

const Loading = () => (
  <div className={loading}>
    <RiseLoader css={override} color={"#3266cc"} size={30} />
  </div>
);

export default Loading;
