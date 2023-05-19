import Style from "./Title.module.css";

export const Title = ({ textTile, subTitle }) => {
    console.log(textTile);
    return (
        <section className={Style.boxtitle}>
            <h3 className={Style.titleList}>{ textTile }</h3>
            <p className={Style.suTitleList}>{ subTitle }</p>
        </section>
    )
}