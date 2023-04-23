import Config from "Config";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import css from "./support.module.css";
import supportJson from "res/data/supports-en.json";

const supports = supportJson.supports;

/* function SupportSearch() {
    return (
        <div className={css.searchBoxContainer}>
            <input className={css.searchInput} placeholder="Enter text to search" />
        </div>
    );
} */

function SearchResult(props) {
    const support = props.support;
    if (!support) {
        return null;
    }
    return (
        <Link to={support.link} className={css.searchResultLink}>
            <div className={css.searchResult}>
                <div className={css.searchResultTitle}>
                    <span className={css.searchResultTitleText}>{support.title}</span>
                </div>
            </div>
        </Link>
    );
}

function SupportIndexComponent() {
    let supportsFiltered = supports;
    Object.keys(supportsFiltered).forEach((supportId) => {
        const support = supportsFiltered[supportId];
        support.link = "/support/" + support.id;
    });

    /*  const category = this.props.params.category;
     console.log(category);
     if (category) {
     supportsFiltered = {};
     Object.keys(supports).map((supportId) => {
     const support = supports[supportId];
     if (support.category.toLowerCase() == category.toLowerCase()) {
     support.link = "/support/" + support.id;
     supportsFiltered[supportId] = support;
     }
     });
     } else {
     Object.keys(supportsFiltered).map((supportId) => {
     const support = supportsFiltered[supportId];
     support.link = "/support/" + support.id;
     });

     Object.keys(categories).map((categoryId) => {
     const category = categories[categoryId];
     category.link = "/support/category/" + category.title.toLowerCase();
     supportsFiltered[categoryId] = category;
     });
     } */

    return <div className={css.supportIndexPage}>
        <div className={css.supportHeader}>
            <div className={css.supportTitle}>
                {Config.appName} <span>Support</span><sup className={css.betaLabel}>Beta</sup>
            </div>
        </div>
        {/* <SupportSearch /> */}
        <div className={css.searchResultContainer}>
            {Object.keys(supportsFiltered).map((supportId) => (
                <SearchResult key={supportId} support={supportsFiltered[supportId]} />
            ))}
        </div>
    </div>
}

export default function SupportIndex(props) {
    let navigate = useNavigate();
    return <SupportIndexComponent {...props} navigate={navigate} params={useParams()} />;
};
