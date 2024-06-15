import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header.js';
import Home from './pages/home.js';
import About from './pages/About.js';
function App() {
  return (
  <>
   <Header/>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}>
      </Route>
    </Routes>
    </BrowserRouter>
   
   </>
  );
}
export default App;