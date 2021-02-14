import React from 'react';
import { useRef, useEffect } from 'react/cjs/react.development';
import styles from './menuBox.module.css';
import {Link,useParams} from 'react-router-dom';


const MenuBox = ({box}) => {
    const menuBoxRef=useRef(null);
    const menuinfoRef=useRef(null);
    const param=useParams();

    useEffect(()=>{
        if(menuBoxRef.current!==null){
            menuBoxRef.current.style.backgroundImage=`url(${box.img})`;
            if(param.sort!=="전체 메뉴"){
                menuBoxRef.current.classList.add(styles.into);
                menuinfoRef.current.style.display="block";
            }
            else{
                menuBoxRef.current.classList.remove(styles.into);
                menuinfoRef.current.style.display="none";
            }
        }
    },[]);
    return <Link to={`/MENU/${box.koName}`} className={styles.link}>
        <div className={styles.menuBox} ref={menuBoxRef}>
            <h2>{box.koName}</h2>
            <h3>{box.enName}</h3>
        </div>
        <div className={styles.menuinfo}ref={menuinfoRef}>
            <h2>{box.koName}</h2>
            <h3>{box.enName}</h3>
        </div>
    </Link>
}

export default MenuBox;