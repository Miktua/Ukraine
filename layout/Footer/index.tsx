import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer className={classnames(styles.root)} {...props}>
            Footer
        </footer>
    );
}

export default Footer;
