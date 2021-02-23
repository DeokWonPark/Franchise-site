import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import SalesItem from '../salesItem/salesItem';
import styles from './sales.module.css';

const Sales = (props) => {
    let time=0;
    const salesRef=useRef(null);
    const [sales,setSales]=useState({
        "1":{
            id:"1",
            name:"물냉면 + 갈비",
            enName:"Cold Noodle with Pork barbecue",
            description:"갈비의 달콤한 맛과 냉면의 새콤한 육수의 조화로운 맛!",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%AC%BC%EB%83%89%EB%A9%B4logo.jpg",
        },
        "2":{
            id:"2",
            name:"비빔냉면 + 갈비",
            enName:"Cold Noodle with Pork barbecue and spicy sauce",
            description:"갈비의 달콤한 맛과 냉면의 새콤한 양념장의 조화로운 맛!",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B9%84%EB%B9%94%EB%83%89%EB%A9%B4logo.jpg",
        },
        "3":{
            id:"3",
            name:"설악 왕갈비",
            enName:"Pork barbecue",
            description:"불향 가득배어 훨씬 더 담백한 숯불 왕갈비",
            imgURL:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%88%EB%B9%84.PNG",
        },
    });

    const handleArrow=(see)=>{
        if(see==="right"){
            time=(time+1)%3;
        }
        else{
            time--;
            if(time<0){
                time=0;
            }
        }
        salesRef.current.style.marginLeft=`calc(${time}*-100%)`;
    }
    return <section className={styles.Sales} ref={salesRef}>
        <ul className={styles.SalesBox}> 
            {Object.keys(sales).map((key)=>{
                return <SalesItem salesItem={sales[key]} handleArrow={handleArrow} key={sales[key].id}></SalesItem>
            })}
        </ul>
    </section>
}

export default Sales;