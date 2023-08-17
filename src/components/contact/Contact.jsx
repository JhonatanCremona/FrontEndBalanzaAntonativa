//Styles
import Style from "./Contact.module.css";
import Monitor from "../../../public/img/server/Monitor"

//Components
import { Title } from "../title/Title"

export const Contacts = () => {
    const data = [
        {
            id:1,
            name: "Jhonatan Fulguera",
            correo: "jfulguera@creminox.com"
        },
        {
            id:2,
            name: "Tiago Gimenez",
            correo: "tgimenez@creminox.com"
        }
    ]
    return (
        <>
            <Title textTile={"Soporte web"}
                    subTitle={"Si presentaste problemas con el Software, comunicate con el area de Sistema IT"}
            />
            <div className={Style.Boxcontact}>
                <section>
                    <h3 className={Style.titlecontact}><b>Dep. Sistemas</b></h3>
                    {data.map(({id, name, correo}) => {
                        return (
                            <article key={id} className={Style.contactuser}>
                                <h4 className={Style.userh1}>{name}</h4>
                                <p><span className={Style.spanuser}>correo: </span>
                                <a href={`mailto:${correo}?`} className={Style.correouser}>{correo}</a>
                                </p>
                            </article>
                        )
                    })}
                </section>
                <Monitor width={600}/>
            </div>
        </>
    )
}