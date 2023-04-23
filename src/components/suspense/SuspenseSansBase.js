import React from "react";
import SuspenseWithLoader from "./SuspenseWithLoader";
import usePageTitle from "../../utils/hooks/usePageTitle";
import Config from "../../Config";

export default function SuspenseSansBase({pageTitle, component: Component}) {
    document.body.scrollTo(0, 0);
    usePageTitle(pageTitle ? `${pageTitle} | ${Config.appName}` : Config.appFullName);

    return <SuspenseWithLoader><Component /></SuspenseWithLoader>
}
