import React from 'react';
import Home from './components/Home'
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {Button} from '@chakra-ui/react'
import Header from './components/Header';
import Footer from './components/Footer';
import Vedios from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
    <Header/>
    
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/vedios' element={<Vedios/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}


export default App;
