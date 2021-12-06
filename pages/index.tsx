// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextPage } from "next";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { DataStore } from "../stores/DataStore";

type Props = {
  dataStore?: DataStore;
};

// const IndexPage: NextPage = inject("dataStore")(observer((props: Props) => {
const IndexPage = inject("dataStore")(observer((props: Props) => {
    const dataStore = props.dataStore!;

    return (
      <div>
        <h1>My first Medium article</h1>

        <p>{dataStore.title} 👋</p>

        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dataStore.changeTitle(e.target.value)
          }
        />
      </div>
    );
  })
);
export default IndexPage;
