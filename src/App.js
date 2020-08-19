import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div>
      <main>
        <Router>
          <Navigation />
          <Switch>
              {/* <Route exact path="/" component={Home}/> */}
              <Route exact path="/contact" component={Contact}/>
              {/* <Route exact path="/Portfolio" component={Portfolio}/> */}
            </Switch>
          
          </Router>
      </main>
    </div>
  );
}

export default App;
