import React from 'react';
import { useRef, useEffect } from 'react/cjs/react.development';
import {Link, useParams} from 'react-router-dom';
import styles from './topView.module.css';

const TopView = ({sideInfo}) => {
    const imgref=useRef(null);
    const titleref=useRef(null);
    const param=useParams();

    useEffect(()=>{
        if(imgref.current!==null){
            imgref.current.style.backgroundImage=`url(${sideInfo.img})`;
        }
    });

    return <section className={styles.topView}>
        <div className={styles.topImg} ref={imgref}>
            <div className={styles.topImgBox}>
                <h2 ref={titleref}>{sideInfo.name}</h2>
            </div>
        </div>
        <div className={styles.topNav}>
            <ul className={styles.topNav}>
                {sideInfo.tag.map((item)=>{
                    let flag=false;
                    if(param.sort===item){
                        flag=true
                    }
                    return <li key={item} className={flag?styles.on:""}><Link to={`/${sideInfo.name}/${item}`} className={styles.link}>{item}</Link></li>
                })}
            </ul>
        </div>
    </section>
}

export default TopView;