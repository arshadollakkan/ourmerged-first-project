
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lock from "./components/display"
import ASa from './components/input';
import Nwe from "./components/new.jsx"
import Er from './components/404';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path='/display' element={<Lock/>}/>
  <Route path='/' element={<ASa/>}/>
  <Route path='/new' element={<Nwe/>}/>
  <Route path='/*' element={<Er/>}/>
 </Routes>
 </BrowserRouter>
     
    </div>
  );
}

export default App;
