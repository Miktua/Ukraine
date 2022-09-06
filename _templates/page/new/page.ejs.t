---
to: <%= path %>/[name].tsx
---
import React from 'react'
import classnames from 'classnames'
import styles from './<%= name %>.module.scss'
import Layout from "../../layout/Layout";

function <%= name %>(): JSX.Element {

    return (
        <Layout className={classnames(styles.root)} >
            <%= name %> page
        </Layout>
    );
}

export default <%= name %>;


