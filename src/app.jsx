import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { FullPage, Slide } from 'react-full-page';
import Header from './components/header/header';
import Visual from './components/visual/visual';
import Menu from './components/menu/menu';
import Infomation from './components/infomation/infomation';
import Footer from './components/footer/footer';

function App() {

  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
      <FullPage controls>
        <Slide>
          <Header></Header>
          <Visual></Visual>
        </Slide>
        <Slide>
          <Menu></Menu>
        </Slide>
        <Slide>
          <Infomation></Infomation>
          <Footer></Footer>
        </Slide>
      </FullPage>
      </Route>

    </Switch>
  </BrowserRouter>
}

export default App;
