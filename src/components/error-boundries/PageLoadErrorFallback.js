import rootStyles from "../../res/css/base.module.css";

const css = {...rootStyles}

export default function PageLoadErrorFallback({resetErrorBoundary}) {
    return (
        <div
            style={{
                textAlign: "center",
                padding: "70px 30px"
            }}>
            <div
                style={{
                    fontSize: "22px",
                    fontWeight: "bold"
                }}>Something went wrong!
            </div>
            <div
                style={{
                    marginTop: 10,
                    color: "#454545"
                }}>Could not load this page
            </div>
            <span
                onClick={resetErrorBoundary}
                className={css.buttonActionPrimary}
                style={{
                    display: "inline-block",
                    marginTop: 20
                }}>Reload</span>
        </div>
    )
}