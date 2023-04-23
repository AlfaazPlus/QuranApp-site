import Config from "Config";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "res/images/icons/back.svg";
import css from "./support.module.css";
import supportJson from "res/data/supports-en.json";
import Page404SansBase from "../404/Page404SansBase";

const supports = supportJson.supports;


function Content(support) {
    return (
        <>
            {support.contents.map((content, index) => {
                return (
                    <div key={index}>
                        <p dangerouslySetInnerHTML={{__html: content.content}} />
                        {content.steps && <Steps steps={content.steps} parentIndex={index + 1} />}
                    </div>
                );
            })}
        </>
    );
}

function Steps(props) {
    return <div className={css.stepsContainer}>
        {props.steps.map((step, index) => {
            const id = `${props.parentIndex}-step${index + 1}`;
            return <div className={css.step} key={index} id={id}>
                <Link to={`#${id}`}>
                    <div className={css.stepText}>Step {index + 1}:</div>
                </Link>{" "}
                <div className={css.stepContent} dangerouslySetInnerHTML={{__html: step}} />
            </div>;
        })}
    </div>;
}

export default function SupportPage() {
    const navigate = useNavigate();
    const params = useParams();

    const support = supports[params.supportId];
    if (!support) {
        return <Page404SansBase />;
    }

    return <div className={css.supportPage}>
        <div className={css.supportHeader}>
            <div className={css.supportTitle}>
                {Config.appName} <span>Support</span><sup className={css.betaLabel}>Beta</sup>
            </div>
            <div className={css.back} onClick={() => navigate("/support")}>
                <BackIcon fill="currentColor" />
            </div>
        </div>
        <div className={css.supportPageContent}>
            <div className={css.supportContentTitle}>{support.title}</div>
            <div className={css.content}>
                <Content {...support} />
            </div>
        </div>
    </div>
}

