import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function App() {
    
  

    return (
        <>
        
        <BrowserRouter>
        <Routes>
          <Route element={<Table1/>} path="/table1"></Route>
          <Route element={<Table2/>} path="/table2"></Route>
        </Routes>
        
        </BrowserRouter>
        
        
        
        <h3>React tables  </h3>
        <div>
      <a href="/table1"><button   >Table1 </button> </a> 
       <a  href="/table2"> <button> Table2</button> </a>
     </div>
        
        </>
    );
}
        