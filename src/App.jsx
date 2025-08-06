

import '../src/css/App.css'
import Favorites from './assets/pages/Favorites';
import Home from './assets/pages/Home';
import { MovieProvider } from './contexts/MovieContext';
import{Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {


 

  return (
    <>
      
    <MovieProvider>
  <Navbar/>
  <main className="main-content">
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
  </main>
  </MovieProvider>
    </>
  );
}

export default App
