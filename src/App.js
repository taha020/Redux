import './App.css';
import { useState } from 'react';
import { Provider } from 'react-redux';

import Module1 from './components/Module1';
import Module2 from './components/Module2';
import store from './Redux/Store';
import { useSelector } from 'react-redux';

store.subscribe(()=> console.log(store.getState()));

function App() {
 
  return (
    <div className="App">

      <Provider store={store} >
        
      <Module1/>
      <Module2/>

      </Provider>


    </div>
  );
}

export default App;
