import './app.css';
import { BrowserRouter ,Switch, Route, useHistory} from 'react-router-dom';
import Header from './components/header/header';
import Visual from './components/visual/visual';
import Menu from './components/menu/menu';
import Infomation from './components/infomation/infomation';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
        <Header></Header>
        <Visual></Visual>
        <Menu></Menu>
        <Infomation></Infomation>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
