import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { FullPage, Slide } from 'react-full-page';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Visual from './components/visual/visual';
import Menu from './components/menu/menu';
import Infomation from './components/infomation/infomation';
import Footer from './components/footer/footer';
import TopView from './components/topView/topView';

function App() {

  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
      {/* <FullPage controls>
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
      </FullPage> */}
        <Header></Header>
        <Sidebar></Sidebar>
        <Visual></Visual>
        <Menu></Menu>
        <Infomation></Infomation>
        <Footer></Footer>
      </Route>

      <Route path={"/brand"}>
        <Header></Header>
        <TopView></TopView>
        <Footer></Footer>
      </Route>

      <Route path={"/menu"}>
        <Header></Header>
        <Footer></Footer>
      </Route>

      <Route path={"/franchise"}>
        <Header></Header>
        <Footer></Footer>
      </Route>

      <Route path={"/store"}>
        <Header></Header>
        <Footer></Footer>
      </Route>

      <Route path={"/community"}>
        <Header></Header>
        <Footer></Footer>
      </Route>

    </Switch>
  </BrowserRouter>
}

export default App;
