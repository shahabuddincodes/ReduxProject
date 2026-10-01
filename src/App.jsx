import React from 'react'
import { ToastContainer } from "react-toastify";

// import Practise from './components/Practise'
import ResultCard from './components/ResultCard'
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectionPage';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <div className='min-h-screen text-black '>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>} />

  
      </Routes>
      
      {/* <Practise/> */}
      {/* <ResultCard pics={info } /> */}

      <ToastContainer/>
    </div>
  )
}

export default App