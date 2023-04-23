import React from "react";
import MaterialProgressBar from "../../widgets/progressbar/MaterialProgressBar";
import { ErrorBoundary } from "react-error-boundary";
import PageLoadErrorFallback from "../error-boundries/PageLoadErrorFallback";

export default function SuspenseWithLoader({children}) {
    return <ErrorBoundary FallbackComponent={PageLoadErrorFallback} onReset={() => window.location.reload()}>
        <React.Suspense
            fallback={
                <div
                    style={{
                        width: "100%",
                        height: "50vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <MaterialProgressBar style={{color: "var(--colorPrimary)"}} /><
            /div>
            }>{children}</React.Suspense>
    </ErrorBoundary>
}