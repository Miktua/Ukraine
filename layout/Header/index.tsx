import React from "react";
import classnames from "classnames";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header className={classnames(styles.root)} {...props}>
      Header
    </header>
  );
}

export default Header;
