import { Switch, Route } from 'react-router-dom';
import { Nav } from './app/components/Nav';
import { LandingPage } from './app/pages/LandingPage';
import { About } from './app/pages/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
