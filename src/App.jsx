//Styles css
import './App.css';
//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { EtiquetaContextProvaider } from './components/context/EtiquetaContex';
import { Layout } from './components/Layout';

function App() {

  return (
    <EtiquetaContextProvaider>
      <Routes>
        <Route path='/' element={<Layout/>} >

        </Route>
      </Routes>
    </EtiquetaContextProvaider>
  )
}

export default App
