import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './menuVisual.module.css';
import MenuBox from './menuBox';
import { useParams } from 'react-router-dom';

const MenuVisual = (props) => {
    const [category,setcategory]=useState([]);

    useEffect(async()=>{
        const loadMenu=await loadMenuData();
        setcategory(loadMenu);
    },[]);

    const loadMenuData=()=>{
        return fetch('/Data/menuVisual.json')
        .then((response)=>response.json());
    }
    // const [category,setcategory]=useState([
    //     {
    //         title:"전체 메뉴",
    //         sort:[
    //             {
    //                 enName:"Noodle Menu",
    //                 koName:"면 요리",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%83%89%EB%A9%B4logo2.png",
    //             },
    //             {
    //                 enName:"Korean Set Table",
    //                 koName:"백반 메뉴",
    //                 img:"https://github.com/DeokWonPark/Franchise-site/blob/master/public/images/%EC%A0%95%EC%8B%9D_3.PNG?raw=true",
    //             },
    //             {
    //                 enName:"Korean Soup",
    //                 koName:"찜&탕 메뉴",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84%ED%83%95logo.PNG",
    //             },
    //             {
    //                 enName:"Side Menu",
    //                 koName:"사이드 메뉴",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84.PNG",
    //             },
    //         ]
    //     },
    //     {
    //         title:"면 요리",
    //         sort:[
    //             {
    //                 enName:"Cold Noodle with Pork barbecue",
    //                 koName:"물냉면",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%AC%BC%EB%83%89%EB%A9%B4logo.jpg",
    //             },
    //             {
    //                 enName:"Cold Noodle with Pork barbecue and spicy sauce",
    //                 koName:"비빔냉면",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B9%84%EB%B9%94%EB%83%89%EB%A9%B4logo.jpg",
    //             },
    //             {
    //                 enName:"Cold Chicken Noodles with Pork barbecue",
    //                 koName:"초계 물냉면",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //             {
    //                 enName:"Cold Chicken Noodles with Pork barbecue and spicy sauce",
    //                 koName:"초계 비빔냉면",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //             {
    //                 enName:"Whole Ribs Red Noodles",
    //                 koName:"갈비 홍탕면",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%ED%99%8D%ED%83%95%EB%A9%B4_.PNG",
    //             },
    //             {
    //                 enName:"Whole Ribs White Noodles",
    //                 koName:"갈비 백탕면",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B0%B1%ED%83%95%EB%A9%B41.PNG",
    //             },
    //         ]
    //     },
    //     {
    //         title:"백반 메뉴",
    //         sort:[
    //             {
    //                 enName:"Korean Set Table with Pork barbecue",
    //                 koName:"갈비 백반",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84%EB%B0%B1%EB%B0%98.jpg",
    //             },
    //             {
    //                 enName:"Korean Set Table with Pork Bulgogi",
    //                 koName:"불고기 백반(고추장)",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B6%88%EA%B3%A0%EA%B8%B0%20%EB%B0%B1%EB%B0%98.jpg",
    //             },
    //             {
    //                 enName:"Korean Set Table with Pork Bulgogi (Soy sauce)",
    //                 koName:"불고기 백반(간장)",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //         ]
    //     },
    //     {
    //         title:"찜&탕 메뉴",
    //         sort:[
    //             {
    //                 enName:"Galbitang",
    //                 koName:"갈비탕",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84%ED%83%95_.jpg",
    //             },
    //             {
    //                 enName:"Special Galbitang Looks like Golf Club",
    //                 koName:"골프채 갈비탕",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B3%A8%ED%94%84%EC%B1%84%20%EA%B0%88%EB%B9%84%ED%83%95.jpg",
    //             },
    //             {
    //                 enName:"LA Braised Ribs",
    //                 koName:"LA 갈비찜",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //         ]
    //     },
    //     {
    //         title:"사이드 메뉴",
    //         sort:[
    //             {
    //                 enName:"Pork barbecue",
    //                 koName:"갈비",
    //                 img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84.PNG",
    //             },
    //             {
    //                 enName:"Meat dumplings",
    //                 koName:"고기만두",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //             {
    //                 enName:"Kimchi dumplings",
    //                 koName:"김치만두",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //             {
    //                 enName:"Pork barbecue dumplings",
    //                 koName:"갈비만두",
    //                 img:"http://bgkllen.org.au/wp-content/uploads/2019/04/noimage.jpg",
    //             },
    //         ]
    //     },
    // ])

    const param=useParams();
    const menuRef=useRef(null);
    useEffect(()=>{
        if(menuRef.current!==null){
            if(param.sort!=="전체 메뉴"){
                menuRef.current.classList.add(styles.into);
            }
            else{
                menuRef.current.classList.remove(styles.into);
            }
        }
    },[param])
    return <section className={styles.menu} ref={menuRef}>
        {category.map((item)=>{
            if(item.title===param.sort){
                return<>
                <h2 className={styles.menuTitle}>{item.title}</h2>
                <div className={styles.menuBox}>
                    {item.sort.map((box)=>{
                        return <MenuBox box={box} key={box.enName}></MenuBox>
                    })}
                </div>
            </>
            }
        })}
    </section>
}

export default MenuVisual;