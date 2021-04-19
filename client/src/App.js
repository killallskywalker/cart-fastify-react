import React from 'react';
import './App.css';
import './styles/index.css';
import Product from './pages/Product';
import Welcome from './pages/Welcome';
import { Route , Switch , BrowserRouter as Router} from "react-router-dom";
import UserProvider from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/product/:userId" component={Product}/>
          </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
