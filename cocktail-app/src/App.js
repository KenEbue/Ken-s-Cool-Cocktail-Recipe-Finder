import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CocktailFinder from './components/CocktailFinder';
import CocktailList from './components/CocktailList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/cocktails">All Cocktails</Link>
              </li>
              {/* Add more links for other routes */}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/cocktails" component={CocktailList} />
            {/* Add more routes for other components */}
          </Switch>
          <CocktailFinder />
        </header>
      </div>
    </Router>
  );
}

export default App;
