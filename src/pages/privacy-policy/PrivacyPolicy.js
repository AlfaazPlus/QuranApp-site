import React from "react";
import css from "pages/about/about.module.css";
import Config from "Config";
import { copyTextToClipboard } from "utils/Suppliments";
import SnackBar from "utils/SnackBar";
import { ReactComponent as LinkIcon } from "res/images/icons/link.svg";

function BlockTitle(props) {
    return (
        <>
            <h3 id={props.id} className={css.blockTitle}>
                <p>{props.children}</p>
                <div
                    className={css.iconLink}
                    onClick={() => {
                        copyTextToClipboard(window.location.origin + window.location.pathname + "#" + props.id, () => {
                            new SnackBar("Link copied to clipboard", SnackBar.SHORT).show();
                        });
                    }}
                >
                    {<LinkIcon />}
                </div>
            </h3>
        </>
    );
}

export default function PrivacyPolicy() {
    return <>
        <h3>Privacy Policy</h3>
        <div className={css.block}>
            <p style={{fontSize: "15px", fontStyle: "italic"}}>Last updated: {Config.privacyPolicyLastUpdated}</p>
        </div>
        <BlockTitle id="permissions">Permissions</BlockTitle>
        <div className={css.block}>
            We currently do not ask for any special permissions of your device such as gps, camera, contacts, storage etc,
            because the App currently does not rely on them.
        </div>
        <BlockTitle id="data-safety">Data Safety</BlockTitle>
        <div className={css.block}>
            We are committed to protect your personal information and your right to privacy. We do not collect, store or share your personal information. We do not share your information with
            third-party.
        </div>
        <BlockTitle id="contact-us">Contact Us</BlockTitle>
        <div className={css.block}>
            If You want further information about Our Privacy Policy, please feel free to contact Us
            at <a href={"mailto:" + Config.emailSupport}>{Config.emailSupport}</a> or create an issue
            on <a href={Config.githubIssues}>GitHub</a>.
        </div>
    </>
}
