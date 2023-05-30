import { useState, createContext, useEffect } from "react";

import resultSerchEtiqueta from "../api/apiExample.json"

export const EtiquetaContext = createContext();
export const EtiquetaContextProvaider = ({ children }) => {
    const [etiquetas, setEtiquetas] = useState([]);
    const [producto, setProducto] = useState([]);
    const [idEtiqueta, setIdEtiqueta] = useState("");
    const [etiqueta, setEtiqueta] = useState([]);

    const API_URL = `http://localhost:5000`;
    const API_ETIQUETAS_LISTAR = `${API_URL}/etiquetas/listar`;
    const apiProducto = `${API_URL}/productos`;
    const API_ETIQUETA_ID = `${API_URL}/etiquetas/${idEtiqueta}`;
 
    const options = {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    }
    console.log("CONTEXT",idEtiqueta);
    useEffect(() => {
        fetch(API_ETIQUETAS_LISTAR, options)
            .then(response => response.json()) 
            .then(json => setEtiquetas(json))
            .catch(err => console.log(err));
        fetch(apiProducto, options)
            .then(response => response.json()) 
            .then(json => setProducto(json))
            .catch(err => console.log(err));
        console.log(`${API_URL}/etiquetas/${idEtiqueta}`);
        fetch(`${API_URL}/etiquetas/${idEtiqueta}`, options)
            .then(response => response.json())
            .then(json => setEtiqueta(json))
            .catch(err => console.log(err));
    },[]);

    console.log("CONTEXT",etiqueta)
    console.log(resultSerchEtiqueta);
    const ordernarId = etiquetas.sort((a, b) => a.id - b.id)
    return (
        <EtiquetaContext.Provider value={{ordernarId, producto,idEtiqueta, setIdEtiqueta}}>
            {children}
        </EtiquetaContext.Provider>
    )
}