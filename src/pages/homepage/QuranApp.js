import React from "react";
import Header from "../../components/partials/header/Header";
import Footer from "../../components/partials/footer/Footer";
import mainStyle from "res/css/main.module.css";
import Config from "Config";
import { ReactComponent as CheckIcon } from "res/images/icons/check.svg";
import usePageTitle from "../../utils/hooks/usePageTitle";
import { ReactComponent as GitHubLogo } from "../../res/images/icons/github-mark-white.svg";

const showcaseItems = [
    ["No ads or purchases", "Totally free and clean"],
    ["Multiple Translations", "Supports multiple translations at once"],
    ["Multiple Recitations", "Listen to different recitations"],
    ["Multiple Quran Fonts", "Available in multiple scripts"],
    ["Verse Reminder", "Reminds you of a verse daily"],
    ["Advanced Verse Interlinking", "Reference to other verses, and switch between them quickly"],
    ["Advanced Footnotes Viewing", "View multiple footnotes at once"],
    ["Many More ...", "That is not all"],
];


function QuranAppComponent() {
    usePageTitle(Config.appFullName);
    return (
        <>
            <Header isHomepage={true} />
            <div className={mainStyle.mainBodyWrapper}>
                <div className={mainStyle.homepageContainer}>
                    <div className={mainStyle.homepageHeader}>
                        <div className={mainStyle.titleExploreQuran}>More than just reading, explore the Qur'an</div>
                        <div className={mainStyle.introLinks}>
                            <a
                                href={Config.playStoreUrl}
                                className={mainStyle.downloadButton}
                                target="_blank"
                                rel="noreferrer">
                                Download Now
                            </a>
                            <a
                                href={Config.githubUrl}
                                className={mainStyle.githubButton}
                                target="_blank"
                                rel="noreferrer">
                                <GitHubLogo height={24} />
                                <span>GitHub Repo</span>
                            </a>
                        </div>
                    </div>

                    <div className={mainStyle.showcase}>
                        <div className={mainStyle.showcaseCol}>
                            <div className={mainStyle.showcaseTitle}>Clean Design</div>
                            <img src="/images/showcase/showcase1.png" alt="" />
                        </div>
                        <div className={mainStyle.showcaseCol}>
                            <div className={mainStyle.showcaseTitle}>Focused Reading</div>
                            <img src="/images/showcase/showcase2.png" alt="" />
                        </div>
                    </div>
                    <div className={mainStyle.titleSalientFeatures} id="features">
                        Salient Features
                    </div>
                    <div className={mainStyle.showcaseTableWrapper}>
                        <div className={mainStyle.showcaseTable}>
                            {showcaseItems.map((item, index) => (
                                <div key={index} className={mainStyle.showcaseItem}>
                                    <div className={mainStyle.showcaseItemTitle}>
                                        <div>{item[0]}</div>
                                        <div className={mainStyle.showcaseItemDescription}>{item[1]}</div>
                                    </div>
                                    <div className={mainStyle.showcaseItemTick}>
                                        <CheckIcon />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="https://github.com/AlfaazPlus/QuranApp/blob/master/FEATURES.md">
                            See all features
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default function QuranApp() {
    return <QuranAppComponent />;
}
