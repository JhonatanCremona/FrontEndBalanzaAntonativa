import "./Title.css";

export const Title = ({ textTile, subTitle }) => {
    return (
        <section className="box-title">
            <h3 className="titleList">{textTile}</h3>
            <p className="suTitleList">{subTitle}</p>
        </section>
    )
}