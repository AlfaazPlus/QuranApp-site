import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./mobile-menu.module.css";
import { ReactComponent as CloseIcon } from "res/images/icons/close.svg";
import Config from "../../../Config";

function MobileMenuItem(props) {
    return <NavLink end className={styles.mobileMenuItem} {...props}></NavLink>;
}

function MobileMenu({isMenuOpen, setMenuOpen, menuItems}) {
    if (!isMenuOpen) {
        return null;
    }

    return <div className={styles.mobileMenuWrapper}>
        <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileMenuHeaderLogo}>
                    <div className={styles.name}>Menu</div>
                </div>
                <div className={styles.mobileMenuHeaderClose} onClick={() => setMenuOpen(false)}>
                    <CloseIcon fill="currentColor" />
                </div>
            </div>
            <div className={styles.mobileMenuBody}>
                <a
                    className={styles.mobileMenuItem}
                    href={Config.githubUrl}>
                    GitHub
                </a>
                {Object.keys(menuItems).map((key, index) => <MobileMenuItem
                    key={index}
                    to={menuItems[key]}
                    onClick={() => setMenuOpen(false)}>
                    {key}
                </MobileMenuItem>)}
            </div>
        </div>
        <div className={styles.mobileMenuOverlay} onClick={() => setMenuOpen(false)} />
    </div>;
}

export default MobileMenu;
