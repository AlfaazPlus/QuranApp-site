import css from "./material-progressbar.module.css"

export default function MaterialProgressBar({style}) {
    return <span className={css.materialProgressBar_root} style={style}>
            <svg className={css.materialProgressBar_svg} viewBox="22 22 44 44">
                <circle className={css.materialProgressBar_svg_circle} cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"/>
            </svg>
        </span>
}