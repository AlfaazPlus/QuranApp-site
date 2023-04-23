import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as MenuIcon } from "res/images/icons/hamburger.svg";
import { ReactComponent as GitHubLogo } from "res/images/icons/github-mark-white.svg";
import headerStyle from "./header.module.css";
import MobileMenu from "./MobileMenu";
import Config from "Config";

const css = {...headerStyle}

const menuItems = {
    Help: "/support",
    "Privacy Policy": "/privacy-policy",
    About: "/about",
    Feedback: "/feedback",
};

function MenuItem(props) {
    return <NavLink end className={css.menuItem} {...props}></NavLink>;
}

function toggleBodyScroll(disabled) {
    document.body.style.overflowY = disabled ? "hidden" : "auto";
}

function HeaderComponent(props) {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        toggleBodyScroll(isMenuOpen && isMobile);

        const listener = () => {
            const nIsMobile = window.innerWidth <= 768;
            if (nIsMobile && !isMobile) {
                setIsMobile(true);
            } else if (!nIsMobile && isMobile) {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [isMenuOpen, isMobile])

    return (
        <>
            <div className={css.header + (props.isHomepage ? " " + css.homepage : "")}>
                <div className={css.headerLeft}>
                    <Link to="/" className={css.headerLeftLogo}>
                        <img src="/images/site-icons/logo-main.svg" alt="" />
                        <div className={css.appTitle}>
                            <span className={css.name}>{Config.appName}</span>
                            <span className={css.tagline}>{Config.tagline}</span>
                        </div>
                    </Link>
                </div>
                <div className={css.headerRight}>
                    {!isMobile && <div className={css.headerRightMenu}>
                        <a
                            href={Config.playStoreUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={css.menuItem + " " + css.download}
                        >Download</a>
                        <a
                            href={Config.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={css.menuItem + " " + css.github}>
                            <GitHubLogo height={18} />
                            <span>Github</span>
                        </a>
                        {Object.keys(menuItems).map((key, index) => (
                            <MenuItem key={index} to={menuItems[key]}>
                                {key}
                            </MenuItem>
                        ))}
                    </div>}
                    {isMobile && <div className={css.menuIcon} onClick={() => setMenuOpen(!isMenuOpen)}>
                        <MenuIcon />
                    </div>}
                </div>
            </div>
            {isMobile && <MobileMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} menuItems={menuItems} />}
        </>
    );
}

export default function Header(props) {
    return <HeaderComponent {...props} />;
}