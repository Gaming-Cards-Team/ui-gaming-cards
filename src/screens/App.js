import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import Main from './Main'
import CardDetails from './CardDetails'

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/card/:id' component={withRouter(CardDetails)}/>
        </Switch>
  </BrowserRouter>
  );
};

export default App;