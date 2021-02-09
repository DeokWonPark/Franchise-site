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
  const body=document.querySelector('body');

  useEffect(()=>{
    body.style.marginTop="0px";
    console.log(body.style.marginTop);
    console.log(checkpoint3ref.current.getBoundingClientRect());
    checkpoint2=Number.parseInt(body.getBoundingClientRect().top-checkpoint2ref.current.getBoundingClientRect().top);
    checkpoint3=Number.parseInt(body.getBoundingClientRect().top-checkpoint3ref.current.getBoundingClientRect().top);
  },[]);

  //const s=window.innerHeight;
  const scrollCheckPoint=(e)=>{
    console.log(e);
    checkpoint2=Number.parseInt(body.getBoundingClientRect().top-checkpoint2ref.current.getBoundingClientRect().top);
    checkpoint3=Number.parseInt(body.getBoundingClientRect().top-checkpoint3ref.current.getBoundingClientRect().top);

    let marginTop=body.style.marginTop;
    window.removeEventListener("mousewheel",scrollCheckPoint);
    marginTop=Number.parseInt(marginTop.substring(0,marginTop.length-2));

    //console.log(marginTop, checkpoint2ref.current.getBoundingClientRect().top);
    //console.log(e.deltaY, checkpoint2, checkpoint3);

    if(e.deltaY>0){
      if(body.style.marginTop===`${checkpoint2}px`){
        body.style.marginTop=`${checkpoint3}px`;
      }
      else if(body.style.marginTop===`0px`){
        body.style.marginTop=`${checkpoint2}px`;
        bulletref.current.style.display="none";
      }
    }
    else{
      if(marginTop>=checkpoint2 && marginTop<0){
        body.style.marginTop=`0px`;
        bulletref.current.style.display="block";
      }
      else if(marginTop>=checkpoint3 && marginTop<checkpoint2){
        body.style.marginTop=`${checkpoint2}px`;
      }
    }
    console.log(body.style.marginTop);
    if(body.style.marginTop===`${checkpoint2}px` || body.style.marginTop===`${checkpoint3}px`){
      window.addEventListener('mousewheel', scrollCheckPoint);
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
