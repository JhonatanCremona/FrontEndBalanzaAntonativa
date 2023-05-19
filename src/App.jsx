//Styles css
import './App.css';
//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { EtiquetaContextProvaider } from './components/context/EtiquetaContex';
import { Layout } from './components/Layout';
import { Contacts } from './components/contact/Contact';

function App() {

  return (
    <EtiquetaContextProvaider>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
    </EtiquetaContextProvaider>
  )
}

export default App
