//Styles css
import './App.css';
//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { EtiquetaContextProvaider } from './components/context/EtiquetaContex';

function App() {

  return (
    <EtiquetaContextProvaider>
      <Routes>
        <Route>

        </Route>
      </Routes>
    </EtiquetaContextProvaider>
  )
}

export default App
