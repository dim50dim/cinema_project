

import './App.css'
import Favorites from './assets/pages/Favorites';
import Home from './assets/pages/Home';
import MovieCard from './components/MovieCard'
import{Routes,Route} from "react-router-dom"

function App() {


 

  return (
    <>
  <main className="main-content">
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
  </main>
    </>
  );
}

export default App
