import React from 'react';
import { useState, useRef } from 'react';
import MenuItem from '../menuItem/menuItem';
import styles from './menu.module.css';

const Menu = ({checkpoint2ref,onScroll}) => {
    const [menu,setMenu]=useState([
        {
            enName:"Noodle Menu",
            koName:"면 요리",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%83%89%EB%A9%B4logo2.png",
        },
        {
            enName:"Korean Set Table",
            koName:"백반 메뉴",
            img:"https://github.com/DeokWonPark/Franchise-site/blob/master/public/images/%EC%A0%95%EC%8B%9D_3.PNG?raw=true",
        },
        {
            enName:"Korean Soup",
            koName:"찜/탕 메뉴",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84%ED%83%95logo.PNG",
        },
        {
            enName:"Side Menu",
            koName:"사이드 메뉴",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84.PNG",
        },
    ]);

    const menufooterref=useRef(null);
    const menufooterref_=useRef(null);
    //const checkpoint2ref=useRef(null);

    return <section className={styles.menu} ref={checkpoint2ref}>
        <div className={styles.menuHead}>
            <h2>MENU</h2>
            <p>갈비주는 냉면 설악본가의 메뉴를 소개합니다.</p>
        </div>
        <ul className={styles.menuItems}>
            {menu.map((item)=>{
                return <MenuItem menu={item} key={item.enName} menufooterref={[menufooterref,menufooterref_]} checkpoint2ref={checkpoint2ref} onScroll={onScroll}></MenuItem>
            })}
        </ul>
        <span className={styles.menufooter}>
            <p ref={menufooterref} className={styles.foot1}>" 갈쌈냉면 "만의 매혹적인 맛!</p>
            <p ref={menufooterref_}>지금바로 느껴보세요~</p>
        </span>
    </section>
}

export default Menu;