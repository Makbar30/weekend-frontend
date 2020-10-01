import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DefaultLayout from './containers'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas,fab);

const LoginPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Login Page</h1>
      </header>
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Not Found Page</h1>
      </header>
    </div>
  )
}

function App() {
  
  return (
   
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Main Page" component={DefaultLayout}/>
        <Route path="/login" name="Login Page" component={LoginPage}/>     
        <Route path="*" name="Not Found Page" component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
