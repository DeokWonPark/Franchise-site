import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from './menuVisual.module.css';
import MenuBox from './menuBox';

const MenuVisual = (props) => {
    const [category,setcategory]=useState([
        {
            title:"전체 메뉴",
            sort:[
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
            ]
        },
        {
            title:"면 요리",
            sort:[
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
            ]
        },
    ])
    return <section className={styles.menu}>
        {category.map((item)=>{
            return<>
                <h2>{item.title}</h2>
                <div className={styles.menuBox}>
                    {item.sort.map((box)=>{
                        return <MenuBox box={box}></MenuBox>
                    })}
                </div>
            </>
        })}
    </section>
}

export default MenuVisual;