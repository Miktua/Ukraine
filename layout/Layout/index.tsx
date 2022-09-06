import React, { useState } from "react";
import classnames from "classnames";
import Head from "next/head";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className={classnames(styles.root, className)} {...props}>
      <Head>
        <title>Subscription tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
