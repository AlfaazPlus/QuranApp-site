import React from "react";

/**
 * A custom hook that sets {@link window.document.title} only if the passed parameter is changed.
 * @param pageTitle Title of the document.
 * */

export default function usePageTitle(pageTitle) {
    React.useMemo(() => document.title = pageTitle ? pageTitle : window.location.hostname, [pageTitle]);
}