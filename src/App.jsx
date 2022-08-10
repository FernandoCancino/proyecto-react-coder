import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';



function App() {

    return (
    <>
      <NavBar />
      <Contador/>
      <ItemListContainer/>
      <ItemDetailConteiner/>
    </>
  )
}

export default App; 
