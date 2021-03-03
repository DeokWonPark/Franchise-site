import React from 'react';
import { useRef, useEffect } from 'react';
import styles from './menuBox.module.css';
import {Link,useParams} from 'react-router-dom';


const MenuBox = ({box}) => {
    const menuBoxRef=useRef(null);
    const menuinfoRef=useRef(null);
    const param=useParams();
    let path=box.koName;
    if(param.sort!=="전체 메뉴"){
        path=param.sort;
    }

    useEffect(()=>{
        if(menuBoxRef.current!==null){
            menuBoxRef.current.style.backgroundImage=`url(${box.img})`;
            if(param.sort!=="전체 메뉴"){
                menuBoxRef.current.classList.add(styles.into);
                menuinfoRef.current.style.display="block";
                path=param.sort;
            }
            else{
                menuBoxRef.current.classList.remove(styles.into);
                menuinfoRef.current.style.display="none";
                path=box.koName;
            }
        }
    },[]);
    return <Link to={`/MENU/${path}`} className={styles.link}>
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