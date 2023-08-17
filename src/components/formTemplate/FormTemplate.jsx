//Hooks
import { useState } from "react";

//Componentes
import { Toaster, toast } from 'sonner'
import { Title } from "../title/Title";

//Styls
import Style from "./FormTemplate.module.css"


export const FormTemplate = () => {
    const [newEtiqueta, setNewEtiqueta] = useState({
        nameEtiqueta:"",
        producto:"",
        lote:"",
        fechaVencimiento:"",
        operario:""
    });

    const handleChange = (event) => {
        setNewEtiqueta({
            ...newEtiqueta,
            [event.target.name] : event.target.value,
        });
    };

    

    const API = "http://localhost:5000/etiquetas/guardar";
    const settings = {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer", 
        body: JSON.stringify(newEtiqueta), 
      }
 
    async function guardarEtiqueta(API, settings) {
        const response = await fetch(API, settings)
        console.log(response.json);
        return await response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        guardarEtiqueta(API,settings)
            .then(() => toast.success('Registro exitoso!'))
            .catch(err => toast.error(`Ocurrio un error - sin conexion ERROR 500 ${err.message}`));
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
            type: "text",
            data: "unidades",
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
    const espaciosLetra = {
        letterSpacing:"3px",
        textAlign: "initial",
    }
    return (
        <div>
            <Title textTile={"Registrar Etiqueta"} subTitle={"⌨ Asegurate de completar todos los campos del formulario! ⌨"}/>
            <Toaster position="top-left" richColors/>
            <form className="formPost" onSubmit={handleSubmit}>
                <article className={Style.caja}>
                    {opciones.map(({id, type, data, examples,text}) => {
                        return (
                            <div key={id} className={Style.inputcontainer}>
                                <label htmlFor={data} className={Style.label} style={espaciosLetra}>{text.toUpperCase()}</label>
                                <input type={type} onChange={handleChange} className={Style.textinput} id={data} name={data} placeholder={examples} required/>
                            </div>
                        )
                    })}
                    <button className={Style.buttonPost}>⏏ Guardar</button>
                </article>
            </form>
        </div>
    )
}