import React from "react";
import SuspenseWithLoader from "./SuspenseWithLoader";
import css from "../../res/css/main.module.css";
import usePageTitle from "../../utils/hooks/usePageTitle";
import Config from "../../Config";
import Header from "../partials/header/Header";
import mainStyle from "../../res/css/main.module.css";
import Footer from "../partials/footer/Footer";

export default function SuspenseWithBase({pageTitle, component: Component}) {
    document.body.scrollTo(0, 0);
    usePageTitle(pageTitle ? `${pageTitle} | ${Config.appName}` : Config.appFullName);

    return (
        <>
            <Header />
            <div className={mainStyle.mainBodyWrapper}>
                <div className={mainStyle.mainBody}>
                    <SuspenseWithLoader>
                        <div className={css.container}>
                            <Component />
                        </div>
                    </SuspenseWithLoader>
                </div>
                <Footer />
            </div>
        </>
    );
}
