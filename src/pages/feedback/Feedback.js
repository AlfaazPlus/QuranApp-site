import React from "react";
import baseStyle from "res/css/base.module.css";
import feedbackStyles from "pages/feedback/feedback.module.css";
import Config from "Config";

export default function Feedback() {
    return <>
        <div className={feedbackStyles.feedbackContainer}>
            <div className={feedbackStyles.pageTitle}>
                <h3>Feedback</h3>
                <div>
                    Whether you have an idea for new features or want to report an issue in the {Config.appName}, kindly
                    visit
                </div>
                <a href={Config.githubIssues} className={baseStyle.buttonPrimary}>Issues page</a>
                <div>
                    If you want to report a specific issue with translations or other resources in the app, kindly visit
                </div>
                <a href={Config.githubVerseReport} className={baseStyle.buttonPrimary}>Verse Report</a>
            </div>
        </div>
    </>
}