import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetail from './components/Countries/CountryDetail/CountryDetail';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/country">
            <Home />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
