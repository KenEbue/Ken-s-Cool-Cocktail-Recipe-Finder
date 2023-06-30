import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import CocktailFinder from './components/CocktailFinder';
import CocktailList from './components/CocktailList';
import CocktailShow from './components/CocktailShow';
import CocktailEdit from './components/CocktailEdit';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route exact path="/cocktails" component={CocktailList} />
            <Route path="/cocktails/:id/show" component={CocktailShow} />
            <Route path="/cocktails/:id/edit" component={CocktailEdit} />
          </Switch>
          <CocktailFinder />
        </header>
      </div>
    </Router>
  );
}

export default App;
