import { useState, useContext } from "react";
import { EtiquetaContext } from "../../context/EtiquetaContex";
//Styls
import Style from "./FormEdit.module.css"

import resultSerchEtiqueta from "../../api/apiExample.json"

export const FormEdit = ({ idPlantilla }) => {
    const [newEtiqueta, setNewEtiqueta] = useState({
        nameEtiqueta:"",
        producto:"",
        lote:"",
        fechaVencimiento:"",
        operario:""
    });
    const { idEtiqueta } = useContext(EtiquetaContext);

    const handleChange = (event) => {
        setNewEtiqueta({
            ...newEtiqueta,
            [event.target.name] : event.target.value,
        });
    };
    const opciones = [
        {
            id:"0",
            type: "text",
            data: "nameEtiqueta",
            text:"Nombre Etiqueta",
            examples: "Etiqueta Jamon"
        },
        {
            id:"1",
            type: "text",
            data: "producto",
            text:"Producto",
            examples: "Ej: P32J/1"
        },
        {
            id:"2",
            type: "text",
            data: "lote",
            text:"Lote",
            examples:"Ej:4575"
        },
        {
            id:"3",
            type: "number",
            data: "unidad",
            text:"Cantidad",
            examples:"Ej:4"
        },
        {
            id:"4",
            type: "date",
            data: "fechaVencimiento",
            text:"Fecha Vencimiento",
            examples: "Ej:2023-11-4"
        },
        {
            id:"5",
            type: "text",
            data:"operario",
            text: "Operario",
            examples:"Ej:Carlos"
        }   
    ]
    console.log(idEtiqueta);
    return (
        <form action="" className={Style.formulario} autoComplete="off">
            {opciones.map(({id, type, data, text}) => {
                        return (
                            <div key={id} className={Style.inputcontainer}>
                                <label htmlFor={data} className={Style.label}>{text.toUpperCase()}</label>
                                <input type={type} onChange={handleChange} className={Style.textinput} id={data} name={data} required value={"prueba"}/>
                            </div>
                        )
                    })}
            <button >Guardar</button>
        </form>
    )
}