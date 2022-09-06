---
to: <%= path %>/index.tsx
---
import React from 'react'
import classnames from 'classnames'
import styles from './<%= name %>.module.scss'
import { <%= name %>Props } from './<%= name %>.props'

function <%= name %>({ className, ...props }: <%= name %>Props): JSX.Element {

    return (
        <div
            className={classnames(styles.root, className)}
            {...props}
        >
            <%= name %>
        </div>
    );
}

export default <%= name %>;


