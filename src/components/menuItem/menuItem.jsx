import React from 'react';
import { useRef,useEffect } from 'react';
import styles from './menuItem.module.css';
const MenuItem = ({menu}) => {

    const menuRef=useRef(null);

    /*useEffect(()=>{
        if(menuRef!==null){
            menuRef.current.style.backgroundImage=`url(${menu.img})`;
            console.log("ds")
        }
    },[])*/

    return <div className={styles.menuItem} ref={menuRef}>
        <img src={menu.img} alt="menuImg" className={styles.menuImg}/>
    </div>
}

export default MenuItem;