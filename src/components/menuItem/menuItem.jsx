import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './menuItem.module.css';
const MenuItem = ({menu}) => {

    const menuRef=useRef(null);

    useEffect(()=>{
        if(menuRef!==null){
            menuRef.current.style.backgroundImage=`url(${menu.img})`;
            console.log("ds")
        }
    },[])

    return <div className={styles.menuItem} ref={menuRef}>
        <div className={styles.menuInfo}>
            <p>{menu.enName}</p>
            <h3>{menu.koName}</h3>
        </div>
    </div>
}

export default MenuItem;