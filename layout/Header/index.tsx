import React from "react";
import classnames from "classnames";
import Link from "next/link";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";
import LogoIcon from "../../public/images/icons/logo.svg";
import UserMenu from "./UserMenu";

function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header className={classnames(styles.root)} {...props}>
      <Link className={styles.homeButton} type="button" href="/">
        <LogoIcon className={styles.logoIcon} />
      </Link>
      <UserMenu />
    </header>
  );
}

export default Header;
