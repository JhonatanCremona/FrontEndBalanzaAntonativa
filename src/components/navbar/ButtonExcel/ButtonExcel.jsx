//Dependencias
import { useState } from "react"
//Styles
import Style from "./ButtonExcel.module.css"

export const ButtonExcel = () => {  
    const [isExporting, setIsExporting] = useState(false) 
    const [isExpot, setIsExport] = useState(false)
    
    const handleClick = () => {
        setIsExporting(true);
        if (setIsExporting) {
            console.log("dasd");
        }
        setTimeout(() => {
            setIsExporting(false)
            setIsExport(true)
            setTimeout(()=> {
                setIsExport(false)
            }, 1700)
        }, 2000)
    }

    return (
        <button
            className={Style.exportarExcel}
            disabled={isExporting || isExpot}
            onClick={handleClick}>
            <span className={Style.rail}></span>
            <span className={Style.iconExcel}></span>
            <span className={Style.text}>
                {isExporting
                    ? "Exportando" 
                    : isExpot
                        ? "Completo"
                        : "Descargar Reporte"
                }
                </span>    
        </button>
    )
}