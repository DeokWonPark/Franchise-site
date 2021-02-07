import React from 'react';
import { useState } from 'react';
import MenuItem from '../menuItem/menuItem';
import styles from './menu.module.css';

const Menu = (props) => {
    const [menu,setMenu]=useState([
        {
            enName:"Noodle Menu",
            koName:"면 요리",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%AC%BC%EB%83%89%EB%B9%84%EB%83%89.jpg",
        },
        {
            enName:"Korean Set Table",
            koName:"백반 메뉴",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B0%B1%EB%B0%98logo.jpg",
        },
        {
            enName:"Koradn Soup",
            koName:"찜/탕 메뉴",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84%ED%83%95.jpg",
        },
        {
            enName:"Side Menu",
            koName:"사이드 메뉴",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%AC%BC%EB%83%89%EB%B9%84%EB%83%89.jpg",
        },
    ])
    return <section className={styles.menu}>
        <div className={styles.menuHead}>
            <h2>MENU</h2>
            <p>갈비주는 냉면 설악본가의 메뉴를 소개합니다.</p>
        </div>
        <ul className={styles.menuItems}>
            {menu.map((item)=>{
                return <MenuItem menu={item} key={item.enName}></MenuItem>
            })}
        </ul>
    </section>
}

export default Menu;