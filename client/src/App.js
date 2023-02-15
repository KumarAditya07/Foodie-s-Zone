import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';


function App() {
  return (
   <Router>
   <div>
       <Routes>
    

      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
      {/* <Route path='/update/:id' element={}/>
      <Route path='/logout' element={<h1>logout component</h1>}/>
      <Route path='/profile' element={<h1>profile component</h1>}/>  */}
      
       
      </Routes>
      </div>
   </Router>
  );
}

export default App;
