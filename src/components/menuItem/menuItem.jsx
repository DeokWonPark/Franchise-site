import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './menuItem.module.css';
import classNames from 'classnames';
const MenuItem = ({menu}) => {

    const menuRef=useRef(null);

    useEffect(()=>{
        if(menuRef!==null){
            menuRef.current.style.backgroundImage=`url(${menu.img})`;
        }
        window.addEventListener('load', scrollFunc);
        window.addEventListener('scroll', scrollFunc);
    },[])

    const scrollFunc=()=>{
        if(!menuRef.current.classList.contains(styles.show)){
            const scrolly=menuRef.current.getBoundingClientRect().top;
            if((window.innerHeight) > scrolly){
                menuRef.current.classList.add(styles.show);
            }
        }
        else{
            const scrolly=menuRef.current.getBoundingClientRect().top;
            if((window.innerHeight) < scrolly){
                menuRef.current.classList.remove(styles.show);
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