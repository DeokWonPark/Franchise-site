import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './menuItem.module.css';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
const MenuItem = ({menu,menufooterref}) => {

    const menuRef=useRef(null);

    useEffect(()=>{
        if(menuRef!==null){
            menuRef.current.style.backgroundImage=`url(${menu.img})`;
        }
        window.addEventListener('scroll', scrollFunc);
    },[])

    const scrollFunc=async ()=>{
        if(menuRef.current===null){
            return;
        }
        if(!menuRef.current.classList.contains(styles.show)){
            const scrolly=menuRef.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                menuRef.current.classList.add(styles.show);
                menufooterref[0].current.style.transform="none";
                menufooterref[1].current.style.transform="none";
            }
        }
        else{
            window.removeEventListener('scroll',scrollFunc);
        }
    }

    return <Link to={`/MENU/${menu.koName}`} className={styles.Link}>
        <div className={classNames(styles.menuItem,styles.scroll)} ref={menuRef}>
            <div className={styles.menuInfo}>
                <p>{menu.enName}</p>
                <h3>{menu.koName}</h3>
            </div>
        </div>
    </Link>
}

export default MenuItem;