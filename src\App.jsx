import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import Register from './routes/Register';
import Trips from './routes/Trips';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.TRIPS} component={Trips} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;