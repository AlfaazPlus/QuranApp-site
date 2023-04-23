import Config from "Config";
import React from "react";
import { Link } from "react-router-dom";
import css from "./footer.module.css";

const menuItems = {
    Help: "/support",
    "Privacy Policy": "/privacy-policy",
    About: "/about",
    Feedback: "/feedback",
};


function GooglePlayLink() {
    return (
        <a
            className={css.googlePlayLink}
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.quranapp.android"
        >
            <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
        </a>
    );
}

export default function Footer() {
    return (
        <div className={css.footer}>
            <GooglePlayLink />
            <div style={{color: "#999999"}}>©{new Date().getFullYear()} {Config.appName}</div>
            <div
                style={{marginTop: 15, textAlign: "center", display: "flex",}}>
                {Object.keys(menuItems).map((key, index) => (
                    <Link style={{fontSize: "0.9rem", margin: 10,}} key={index} to={menuItems[key]}>
                        {key}
                    </Link>
                ))}
            </div>
        </div>
    );
}
