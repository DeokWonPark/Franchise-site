import React, { useEffect } from 'react';
import { useRef } from 'react';
import styles from './slideItem.module.css';

const SlideItem = ({item}) => {
    const fooditemRef=useRef(null);

    useEffect(()=>{
        if(fooditemRef.current!==null){
            fooditemRef.current.style.backgroundImage=`url(${item.img})`
        }
    },[])

    return <span className={styles.foodInfo} ref={fooditemRef}>
                <i className="fas fa-chevron-left"></i>
                <div>
                    <div className={styles.foodInfohead}>
                        <img className={styles.blog} src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/>
                        <p>인기맛집</p>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <i className="fas fa-chevron-right"></i>
            </span>
}

export default SlideItem;