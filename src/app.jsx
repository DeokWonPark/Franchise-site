import './app.css';
import { BrowserRouter ,Switch, Route, useHistory} from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
        <Header></Header>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
