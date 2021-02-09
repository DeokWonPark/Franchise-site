import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './menuItem.module.css';
import classNames from 'classnames';
const MenuItem = ({menu,menufooterref,checkpoint2ref,onScroll}) => {

    const menuRef=useRef(null);
    let checkpoint;

    useEffect(()=>{
        if(menuRef!==null){
            menuRef.current.style.backgroundImage=`url(${menu.img})`;
        }
        window.addEventListener('mousewheel', onScroll);
        window.addEventListener('mousewheel', scrollFunc);
        // window.addEventListener('touch', onScroll);
        // window.addEventListener('touch', scrollFunc);
    },[])

    const body=document.querySelector('body');

    const scrollFunc=async ()=>{
        checkpoint=Number.parseInt(body.getBoundingClientRect().top-checkpoint2ref.current.getBoundingClientRect().top);
        if(!menuRef.current.classList.contains(styles.show)){
            if(body.style.marginTop===`${checkpoint}px`){
                menuRef.current.classList.add(styles.show);
                menufooterref[0].current.style.transform="none";
                menufooterref[1].current.style.transform="none";
            }
        }
        else{
            if(body.style.marginTop!==`${checkpoint}px`){
                menuRef.current.classList.remove(styles.show);
                menufooterref[0].current.style.transition="all 1s ease";
                menufooterref[0].current.style.transform="translate(0,200%)";
                menufooterref[1].current.style.transition="all 1s ease";
                menufooterref[1].current.style.transform="translate(0,200%)";
            }
        }
    }

    return <div className={classNames(styles.menuItem,styles.scroll)} ref={menuRef}>
        <div className={styles.menuInfo}>
            <p>{menu.enName}</p>
            <h3>{menu.koName}</h3>
        </div>
    </div>
}

export default MenuItem;