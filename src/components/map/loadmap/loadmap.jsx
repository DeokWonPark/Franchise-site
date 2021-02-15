import React from 'react';
import { useRef,useEffect } from 'react/cjs/react.development';
import styles from './loadmap.module.css';

const Loadmap = ({info}) => {
    const loadref=useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll', scrollFunc);
    },[])

    const scrollFunc=async ()=>{
        if(loadref.current===null){
            return;
        }
        if(!loadref.current.classList.contains(styles.show)){
            const scrolly=loadref.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                loadref.current.classList.add(styles.show);
            }
        }
        else{
            // const scrolly=loadref.current.getBoundingClientRect().top;
            // if(window.innerHeight < scrolly){
            //     loadref.current.classList.remove(styles.show);
            // }
            window.removeEventListener('scroll',scrollFunc);
        }
    }

    return <div className={info.index%2==1?styles.load:styles.loadre} ref={loadref}>
        <img src={info.img} alt={`load${info.index}`}/>
        <p>{info.description}</p>
  </div>
}

export default Loadmap;