import React from "react";
import Helmet from "react-helmet";

export default (props) => (
  <Helmet
    htmlAttributes={{
      lang: "ja",
    }}
    title={(props.title ? props.title + " | " : "") + "サイトタイトル"}
    meta={[
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: "description",
        content: props.description || "Gastbyサンプル",
      },
    ]}
  />
);
