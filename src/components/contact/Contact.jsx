import "./Contact.css"
import Monitor from "../../public/img/server/Monitor"

//Component
import { Title } from "../title/Title"

export const Contacts = () => {
    return (
        <>
            <Title textTile={"Soporte web"}
                    subTitle={"Si presentaste problemas con el Software, comunicate con el area de Sistema IT"}
            />
            <div className="Box-contact">
                <section>
                    <h3 className="title-contact"><b>Dep. Sistemas</b></h3>
                    <article className="contact-user">
                        <h4 className="user-h1">Jhonatan Fulguera</h4>
                        <p><span className="span-user">correo: </span>
                        <a href="mailto:jfulguera@creminox.com?" className="correo-user">jfulguera@creminox.com</a>
                        </p>
                    </article>

                    <article className="contact-user">
                        <h4 className="user-h1">Tiago Gimenez</h4>
                        <p><span className="span-user">correo: </span>
                        <a href="mailto:tgimenez@creminox.com?" className="correo-user">tgimenez@creminox.com</a>
                        </p>
                    </article>

                </section>
                
                <Monitor width={600}/>
            </div>

        </>
    )
}