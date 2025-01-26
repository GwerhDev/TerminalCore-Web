import { Switch, Route } from 'react-router-dom';
import { Nav } from './app/components/Nav';
import LandingPage from './app/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
