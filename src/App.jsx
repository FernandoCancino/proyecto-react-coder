import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';



function App() {

    return (
    <>
      <NavBar />
      <ItemListContainer/>
      <Contador/>
      <ItemDetailConteiner/>
    </>
  )
}

export default App; 
