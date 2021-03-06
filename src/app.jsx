import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Visual from './components/visual/visual';
import Menu from './components/menu/menu';
import Infomation from './components/infomation/infomation';
import Footer from './components/footer/footer';
import TopView from './components/topView/topView';
import MenuVisual from './components/sidePage/menuVisual';
import ScrollToTop from './components/scrollToTop';
import Map from './components/map/map';
import Communitysort from './components/communitySort/communitysort';
import Brand from './components/brand/brand';
import Franchise from './components/franchise/franchise';
import Sales from './components/sales/sales';

function App({fileUpload,database}) {

  const [sidePageInfo,setSideInfo]=useState([
    {
      path:"/BRAND",
      img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/main3_.jpg",
      name:"BRAND",
      tag:["Brand 소개"],
    },
    {
      path:"/MENU",
      img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EC%A0%95%EC%8B%9D_3.PNG",
      name:"MENU",
      tag:["전체 메뉴","면 요리","백반 메뉴","찜&탕 메뉴","사이드 메뉴"],
    },
    {
      path:"/FRANCHISE",
      img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%80%EA%B2%8C%EB%82%B4%EB%B6%80%ED%99%80.PNG",
      name:"FRANCHISE",
      tag:["FRANCHISE 소개"],
    },
    {
      path:"/STORE",
      img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%80%EA%B2%8C%EC%99%B8%EA%B4%80.PNG",
      name:"STORE",
      tag:["오시는 길"],
    },
    {
      path:"/COMMUNITY",
      img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0.jpg",
      name:"COMMUNITY",
      tag:["공지사항","고객 게시판","가맹문의"],
    },
  ])

  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
        <Header></Header>
        <Sidebar></Sidebar>
        <Visual></Visual>
        <Sales></Sales>
        <Menu></Menu>
        <Infomation></Infomation>
        <Footer></Footer>
      </Route>


      <Route path={"/BRAND"}>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <TopView sideInfo={sidePageInfo[0]}></TopView>
        <Brand></Brand>
        <Footer></Footer>
      </Route>

      <Route path={"/MENU"}>
        <Header></Header>
        <Route path={"/MENU/:sort"}>
          <ScrollToTop></ScrollToTop>
          <TopView sideInfo={sidePageInfo[1]}></TopView>
          <MenuVisual></MenuVisual>
        </Route>
        <Footer></Footer>
      </Route>

      <Route path={"/FRANCHISE"}>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <TopView sideInfo={sidePageInfo[2]}></TopView>
        <Franchise></Franchise>
        <Footer></Footer>
      </Route>

      <Route path={"/STORE"}>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <TopView sideInfo={sidePageInfo[3]}></TopView>
        <Map></Map>
        <Footer></Footer>
      </Route>

      <Route path={"/COMMUNITY"}>
        <Header></Header>
        <Route path={"/COMMUNITY/:sort/:id"}>
          <ScrollToTop></ScrollToTop>
          <TopView sideInfo={sidePageInfo[4]}></TopView>
          <Communitysort fileUpload={fileUpload} database={database}></Communitysort>
        </Route>
        <Footer></Footer>
      </Route>

    </Switch>
  </BrowserRouter>
}

export default App;
