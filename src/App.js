import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {

  const [loggedState, setLoggedState] = useState(true); //to be changed

  function setState(state){
    setLoggedState(state);
  }

  if(loggedState){
    return(
      <Navigation getState={setState}/>
    )
  }else{
    return (
		  <div className="container">
			  <Header />
			  <Login getState={setState}/>
			  <Footer />
		  </div>
	  );
  }
  
}

export default App;
