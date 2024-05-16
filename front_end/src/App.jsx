import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='container'>
        <Title/>
      <Programs/>
      </div>
    </div>
  )
}

export default App

