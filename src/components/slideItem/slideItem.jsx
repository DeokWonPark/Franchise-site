import React, { useEffect } from 'react';
import { useRef } from 'react';
import styles from './slideItem.module.css';

const SlideItem = ({item,onArrow}) => {
    const fooditemRef=useRef(null);

    useEffect(()=>{
        if(fooditemRef.current!==null){
            fooditemRef.current.style.backgroundImage=`url(${item.img})`
        }
    },[]);

    const handleArrow=(see)=>{
        onArrow(see);
    }

    return <span className={styles.foodInfo} ref={fooditemRef}>
                <button onClick={handleArrow.bind(this,"left")}><i className="fas fa-chevron-left"></i></button>
                <div className={styles.foodInfoBox}>
                    <div className={styles.foodInfohead}>
                        <img className={styles.blog} src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/>
                        <p>인기맛집</p>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p className={styles.tag}>{item.tag}</p>
                </div>
                <button onClick={handleArrow.bind(this,"right")}><i className="fas fa-chevron-right"></i></button>
            </span>
}

export default SlideItem;