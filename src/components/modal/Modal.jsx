import { motion } from "framer-motion";

//Styls
import Style from "./Modal.module.css";
//Components
import Backdrop from "../listTamplate/Backdrop";
import { FormEdit } from "./formEdit/FormEdit"


const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  
export const Modal = ({ handleClose }) => {
    

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={Style.modal}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            
            <button onClick={handleClose}
              className={Style.close}
            >{"x".toLowerCase()}
            </button>
            <h3 className={Style.title}>Editar plantilla</h3>
            <FormEdit/>
          </motion.div>
      </Backdrop>
    );
  };