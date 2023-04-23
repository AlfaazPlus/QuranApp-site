import React from "react";

/**
 * A custom hook that sets {@link window.document.body.style} only if the passed parameter is changed.
 * @param styles Title of the document.
 * */

export function useBodyStyle(styles) {
    React.useMemo(() => {
        if (styles) {
            for (let styleName in styles) {
                document.body.style[styleName] = styles[styleName]
            }
        }
    }, [styles]);
}