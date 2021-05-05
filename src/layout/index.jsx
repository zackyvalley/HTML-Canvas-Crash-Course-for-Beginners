import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <meta charSet="UTF-8"/>
        <title>タイトル</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="説明文"/>
      </Helmet>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </>
  )
}
