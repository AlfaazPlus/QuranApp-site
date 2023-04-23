import Footer from "components/partials/footer/Footer";
import Header from "components/partials/header/Header";
import mainStyle from "res/css/main.module.css";
import usePageTitle from "../../utils/hooks/usePageTitle";
import Config from "../../Config";

export default function BaseTemplate({pageTitle, children}) {
    document.body.scrollTo(0, 0);
    usePageTitle(pageTitle ? `${pageTitle} | ${Config.appName}` : Config.appFullName);

    return (
        <>
            <Header />
            <div className={mainStyle.mainBodyWrapper}>
                <div className={mainStyle.mainBody}>
                    <div className={mainStyle.container}>{children}</div>
                </div>
                <Footer />
            </div>
        </>
    );
}
