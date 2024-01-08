// nl.;/'

import './App.css';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
<Route path='/' element={<Home></Home>}></Route>  
<Route path='/Projects' element={<Projects></Projects>}></Route>
<Route path='/login' element={<Auth></Auth>}></Route>
<Route path='/register' element={<Auth register ></Auth>}></Route>
<Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
</Routes>
<Footer></Footer>


    </div>
  );
}

export default App;
 