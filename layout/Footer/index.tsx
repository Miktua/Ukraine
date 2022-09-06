import React from "react";
import classnames from "classnames";
import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";

function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <footer className={classnames(styles.root)} {...props}>
      <p className={styles.copyright}>
        dev. by <a className={styles.copyrightLink} href="https://google.com">George Nayfonov</a>
      </p>
    </footer>
  );
}

export default Footer;
