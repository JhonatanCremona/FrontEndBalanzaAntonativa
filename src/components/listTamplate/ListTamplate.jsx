//Dependencias
import { useContext, useEffect, useState } from "react";
import { EtiquetaContext } from "../context/EtiquetaContex";
import { motion } from 'framer-motion';

//Componentes
import { Title } from "../title/Title";
import { Instruction } from "./instruction/Instruction";
import { Toaster, toast } from 'sonner';
import { Delete, EditNote, Note } from '../Icons'

//Styls 
import Style from "./ListTamplate.module.css";

export const ListTamplate = () => {
    const { ordernarId } = useContext(EtiquetaContext);
    const [etiquetaDelete, setEtiquetaDelete] = useState({ id:"",name:"",estado:false });
    const [etiquetaPrint, SetEtiquetaPrint] = useState({id:"",estado:false});

    const variants = {
        hidden: {
          opacity: 0
        },
        visible: ({ delay }) => ({
          opacity: 1,
          transition: {
            delay,
            duration: 1
          }
        })
    }
    async function fetchMethod(apiDel, settings) {
        const response = await fetch(apiDel, settings)
        return await response.json()
    } 
    useEffect(()=>{
        if (etiquetaDelete.estado === true) {
            const apiUrl = `http://localhost:5000/etiquetas/${etiquetaDelete.id}`
            const settings = {
                method: "Delete",
            }
            fetchMethod(apiUrl, settings)
                .then(response => console.log(response.json))
                .catch(error => console.log(error))
            toast.message(`Eliminaste la Etiqueta:`, {
                description: ` - ${etiquetaDelete.name} -`,
                style: {
                    borderTop : '5px solid red',
                    }
            })
            setEtiquetaDelete({id:"",name:"",estado:false})
        }
    },[etiquetaDelete.estado]);

    useEffect(()=> {
        if (etiquetaPrint.estado === true) {
            console.log("Me ejecute");
            const apiUrl = `http://localhost:5000/etiquetas/imprimir/${etiquetaPrint.id}`
            const settings = {
                method: "GET",
            }
            fetchMethod(apiUrl, settings)
            .then(response => console.log(response.json))
            .catch((error) => {
                toast.error(`Sin conexión al server ... 🖶`, {
                    style: {
                        borderTop : '5px solid red',
                        fontSize: "20px",
                        transition: "all 0.3s"
                        }
                })
                return console.log(`Error Capturado Fuera de la función async: ${error}`)
            });

            toast.success(`🖶   Imprimiendo etiqueta... 🖶`, {
                style: {
                    borderTop : '5px solid green',
                    fontSize: "20px",
                    transition: "all 0.3s"
                    }
            })
            SetEtiquetaPrint({id:"",estado:false})
        }
    }, [etiquetaPrint.estado]);
  
    return (
        <>
            <Title textTile={"Imprimir Etiqueta"} subTitle={"Seleccione la etiqueta que desea Imprimir"}/>
            <div className={Style.boxcards}>
                <Toaster position="top-left"/>
                <div>
                {ordernarId.map((etiqueta, index) => {
                    return (
                        <motion.div
                        custom={{ delay: (index + 1) * 0.1 }}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={variants}
                        layoutId={etiqueta.id}
                        key={etiqueta.id}
                        >
                            <article className={Style.card}>
                                <figure><Note/></figure>
                                <div className={Style.boxcard}>
                                    <section>
                                        <h3>{etiqueta.nameEtiqueta != null ? etiqueta.nameEtiqueta : "Etiqueta null"}</h3>
                                        <p className={Style.subtext}>{etiqueta.lote}</p>
                                    </section>

                                    <section className={Style.iconosbutton}>
                                        <button className={Style.buttonicon}>
                                            <EditNote/>
                                        </button>
                                        <button className={Style.buttonicon} onClick={() => {
                                            setEtiquetaDelete({
                                                id: etiqueta.id,
                                                name:etiqueta.nameEtiqueta,
                                                estado:true
                                            })
                                        }}>
                                            <Delete/>
                                        </button>
                                        <input type="radio" name = "test" value={etiqueta.nameEtiqueta} onKeyDown={(e)=> {SetEtiquetaPrint({id: etiqueta.id, estado: e.target.checked})}}/>
                                    </section>
                                </div>
                            </article>
                        </motion.div>
                    )
                })}
                </div>
                <Instruction/>
            </div>
        </>
    )
}