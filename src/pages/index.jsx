import React from "react";
import { Helmet } from "react-helmet";
import { myRenderToStaticMarkup } from "../hooks";
import { Layout } from "../layout";
import Canvas1 from "../components/Canvas1";


export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      <Canvas1 />
    </Layout>
  )
};
