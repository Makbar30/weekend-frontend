import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './defaultHeader/'
import Footer from './defaultFooter/'
import HomePage from '../pages/Home'
import WorksPage from '../pages/Portofolio'

function DefaultLayout() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/dashboard" name="Main Page" component={HomePage} />
          <Route path="/works" name="My Works Page" component={WorksPage} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default DefaultLayout;