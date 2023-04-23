import React from "react";
import css from "./about.module.css";
import Config from "Config";

export default function About() {
    return <>
        <h3>About the Qur’an</h3>
        <div className={css.block}>
            The Noble Quran is the central religious text of Islam. Muslims believe the Qur’an is the book of
            Divine
            guidance and direction for mankind, and consider the original Arabic text the final revelation of
            Allah (God).
            It is widely regarded as the finest work in classical Arabic literature. It is organized in 114
            chapters
            (surah سورة), which consist of verses (ayah آية).
        </div>
        <h3>About {Config.appName}</h3>
        <div className={css.block}>
            The {Config.appName} is an ad-free and privacy-focused mobile application that facilitates exploring the
            Qur’an on daily basis at any time and place. Its easy-to-navigate and neat and clean design helps users to
            overcome the difficulties of reading the Qur’an in the time of technology. The {Config.appName} focuses on
            the latest technologies to aim at providing comprehensive convenience to the users. This app has
            translations in several languages so that people of different languages and regions can understand the
            purpose of the Qur’an. All translations of the original Arabic text are thus interpretations of the original
            meanings and should be embraced as such. This app is licensed under {" "}
            <a href="https://github.com/AlfaazPlus/QuranApp/blob/master/LICENSE">GPL v3.0</a>.
        </div>
        <h3>Credits</h3>
        <div className={css.block}>
            The {Config.appName} was made possible with the will of Allah (Subhan wa Ta’ala) and is originally developed
            by <a href={Config.developerLink}><strong>{Config.developerName}</strong></a>. It took about 10 months to
            first launch it.
            <br /><br />
            Data sources for the development of this app include <a href="https://quranenc.com/en/home">QuranEnc</a>,
            {" "}<a href="https://tanzil.net">Tanzil</a>, <a href="https://www.quran.com">quran.com</a> API and other
            online verified Quran projects.
            <br /><br />
            <p>
                We made the {Config.appName} open source on January 26, 2023. After this event many people have
                contributed to the app. The contributions include app translations etc. To know about the
                contributors, visit <a href="https://github.com/AlfaazPlus/QuranApp/blob/master/CONTRIBUTORS.md">
                this page</a>.
            </p>
        </div>
        <h3>Contribution</h3>
        <div className={css.block}>
            Whether you have an idea for new features or want to fix an issue and if you would like to contribute to the
            {Config.appName} , you can get started by reading{" "}
            <a href="https://github.com/AlfaazPlus/QuranApp/blob/master/CONTRIBUTING.md">this</a>.
        </div>

        <div className={css.block} style={{fontStyle: "italic"}}>
            Read more about the {Config.appName} on <a href={Config.githubReadme}>GitHub</a>. To report bugs/issues you
            can visit the <a href={Config.githubIssues}>issues page</a>.
        </div>
    </>
}
