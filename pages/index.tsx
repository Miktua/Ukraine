import React from "react";
import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import type { NextPage } from "next";
import { UserStore } from "../stores/UserStore";
import styles from "../styles/Home.module.scss";

const Home: NextPage = observer((props) => {
  const store = useInjection(UserStore);

  return (
    <div className={classNames(styles.container, styles.main)}>
      <h1>Hello</h1>
    </div>
  );
});

export default Home;
