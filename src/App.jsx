//Styles css
import './App.css';
//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { EtiquetaContextProvaider } from './components/context/EtiquetaContex';
import { Layout } from './components/Layout';
import { FormTemplate } from './components/formTemplate/FormTemplate'
import { Grafica } from './components/grafica/Grafica'
import { Contacts } from './components/contact/Contact';
import { ListTamplate } from "./components/listTamplate/ListTamplate";
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <EtiquetaContextProvaider>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='listar' element={<ListTamplate/>}/>
          <Route path='guardar' element={<FormTemplate/>}/>
          <Route path='grafica' element={<Grafica/>}/>
          <Route path='contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </EtiquetaContextProvaider>
  )
}

export default App
