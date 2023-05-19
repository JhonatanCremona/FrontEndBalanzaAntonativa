//Dependencias
import { Link } from "react-router-dom"
import { BellIcon } from '@heroicons/react/outline';
//Componentes
import { ButtonExcel } from "./ButtonExcel";
import { NavLink } from "./NavLink";
//Estylos


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
            <nav className="nav-bar">
                <div id="title">
                    <Link className="logo" to="/" > 
                    <h1 className="title-h1">Antonativa</h1>
                    <h1 className="title-sub"><b>Balanza</b></h1>
                    </Link>
                </div>
                <ul className="lista">
                    <li>
                        <Link to={"/notification"}>
                        <BellIcon
                            className="icon" 
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
                                <li key={id}><NavLink to={href}>{text}</NavLink> </li>
                            )
                        })
                    }
                    
                </ul>
            </nav>
        </>
    )
}