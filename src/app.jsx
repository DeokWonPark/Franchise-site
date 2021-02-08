import './app.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import { useRef,useEffect } from 'react';
import Header from './components/header/header';
import Visual from './components/visual/visual';
import Menu from './components/menu/menu';
import Infomation from './components/infomation/infomation';

function App() {

  let checkpoint2,checkpoint3;
  const checkpoint2ref=useRef(null);
  const checkpoint3ref=useRef(null);
  const bulletref=useRef(null);

  useEffect(()=>{
     body.style.marginTop="0px";
    checkpoint2=Number.parseInt(window.pageYOffset+checkpoint2ref.current.getBoundingClientRect().top);
    checkpoint3=Number.parseInt(window.pageYOffset+checkpoint3ref.current.getBoundingClientRect().top);
  },[]);

  const body=document.querySelector('body');
  const scrollCheckPoint=(e)=>{
    if(e.deltaY===125){
      if(body.style.marginTop===`-${checkpoint2}px`){
        body.style.marginTop=`-${checkpoint3}px`;
      }
      else if(body.style.marginTop===`0px`){
        body.style.marginTop=`-${checkpoint2}px`;
        bulletref.current.style.display="none";
      }
    }
    else{
      if(body.style.marginTop===`-${checkpoint2}px`){
        body.style.marginTop=`0px`;
        bulletref.current.style.display="block";
      }
      else if(body.style.marginTop===`-${checkpoint3}px`){
        body.style.marginTop=`-${checkpoint2}px`;
      }
    }
  }

  return <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true}>
        <Header></Header>
        <Visual bulletref={bulletref}></Visual>
        <Menu checkpoint2ref={checkpoint2ref} onScroll={scrollCheckPoint}></Menu>
        <Infomation checkpoint3ref={checkpoint3ref}></Infomation>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
