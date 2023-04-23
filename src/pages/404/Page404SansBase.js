import React from "react";
import baseStyle from "res/css/base.module.css";
import pageStyle from "./page404.module.css";
import { Link } from "react-router-dom";

const css = {...baseStyle, ...pageStyle};

export default function Page404SansBase() {
    return <div className={css.container404}>
        <div className={css.title404}>404</div>
        <div className={css.msg404}>The page you are looking for, does not exist.</div>
        <Link to="/" className={css.buttonPrimary}>
            Home
        </Link>
    </div>
}
