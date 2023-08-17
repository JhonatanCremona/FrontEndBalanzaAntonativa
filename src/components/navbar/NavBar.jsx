//Dependencias
import { Link } from "react-router-dom"
import { BellIcon } from '@heroicons/react/outline';
//Components
import { ButtonExcel } from "./ButtonExcel/ButtonExcel";
import { NavLink } from "./NavLink";
//Styles
import Style from "./NavBar.module.css";

export const NavBar = () => {
    const opciones = [
        {
            id:"1",
            href:"/contacts",
            text:"Contacto"
        },
        {
            id:"2",
            href:"/listar",
            text:"Lista de etiquetas"
        },
        {
            id:"3",
            href:"/grafica",
            text:"Grafica"
        },
        {
            id:"4",
            href:"/guardar",
            text:"Crear Etiqueta"
        }
    ]
    return (
        <>
            <nav className={Style.navbar}>
                <div id="title">
                    <Link className={Style.logo} to="/" > 
                        <h1 className={Style.titleh1}>Antonativa</h1>
                        <h1 className={Style.titlesub}><b>Balanza</b></h1>
                    </Link>
                </div>
                <ul className={Style.lista}>
                    <li>
                        <Link to={"/notification"}>
                        <BellIcon
                            className={Style.icon} 
                            aria-hidden="true"
                        />
                        </Link>
                    </li>
                    <li>
                        <ButtonExcel/>
                    </li>
                    {
                        opciones.map(({id, href, text}) => {
                            return (
                                <li key={id}>
                                    <NavLink to={href}>{text}</NavLink>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </nav>
        </>
    )
}