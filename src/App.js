import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

export const HatsPage = (props) => {
  console.log(props);
  return(
    <>
      <h1>hats page</h1>
      <p>need a hat?</p>
    </>
  );
} 

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatsPage}/>
    </>
  );
}

export default App;
