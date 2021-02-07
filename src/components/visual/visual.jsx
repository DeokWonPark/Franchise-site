import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import SlideItem from '../slideItem/slideItem';
import styles from './visual.module.css';

const Visual = (props) => {

    const [slideItem,setItem]=useState([
        {
            tag:"#갈쌈냉면, #갈비는 공짜",
            title:"갈비쌈 냉면",
            description:"새콤한 냉면과 달콤한 갈비의 조화로운 맛",
            img:"https://github.com/DeokWonPark/Franchise-site/blob/master/public/images/%EC%A0%95%EC%8B%9D_3.PNG?raw=true",
        },
        {
            tag:"#왕갈비, #박세리",
            title:"골프채 갈비탕",
            description:"어마무시한 크기의 대왕갈비",
            img:"https://github.com/DeokWonPark/Franchise-site/blob/master/public/images/%EA%B0%88%EB%B9%84%ED%83%95.gif?raw=true",
        },
        {
            tag:"#겨울별미, #통갈비 국수",
            title:"홍탕면 & 백탕면",
            description:"담백한 국수에 왕갈비가 통째로!",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B0%B1%ED%83%95%EB%A9%B43.PNG",
        },
        {
            tag:"#집밥 백선생, #불맛",
            title:"불고기 백반",
            description:"불맛나는 불고기와 구수한 된장찌개가 함께 어우러진 백반",
            img:"https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B0%B1%EB%B0%98.PNG",
        },
    ]);

    const visualref=useRef(null);
    let time=0;
    let interval;

    const slide=useCallback(()=>{
        console.log(time);
        visualref.current.style.marginLeft=`calc(${time}*-100%)`;
    })
     const intervalFunc=useCallback(()=>{
        time=(time+1)%slideItem.length;
        slide();
     });
    useEffect(()=>{
        if(visualref.current!==null){
            interval= setInterval(intervalFunc,6000);
        }
    },[]);

    const handlebullet=(event)=>{
        const value=(Number.parseInt(event.target.dataset.value)-1);
        time=value;
        slide();
        clearInterval(interval);
        interval=setInterval(intervalFunc,6000);
    }

    const handleArrow=(see)=>{
        if(see==="right"){
            time=(time+1)%slideItem.length;
            slide();
            clearInterval(interval);
            interval=setInterval(intervalFunc,6000);
        }
        else if(see==="left"){
            time=(time-1)%slideItem.length;
            time=time<0?0:time;
            slide();
            clearInterval(interval);
            interval=setInterval(intervalFunc,6000);
        }
    }

    return <><section className={styles.visual} ref={visualref}>
        {slideItem.map((item)=>{
            return <SlideItem item={item} key={item.title} onArrow={handleArrow}></SlideItem>
        })}
    </section>
        <div className={styles.bulletbox} onClick={handlebullet}>
            <input type="radio" name="pos" id={styles.pos1} data-value="1"/>
            <input type="radio" name="pos" id={styles.pos2} data-value="2"/>
            <input type="radio" name="pos" id={styles.pos3} data-value="3"/>
            <input type="radio" name="pos" id={styles.pos4} data-value="4"/>
        </div>
        <p className={styles.bullet}>
          <label htmlFor={styles.pos1}>1</label>
          <label htmlFor={styles.pos2}>2</label>
          <label htmlFor={styles.pos3}>3</label>
          <label htmlFor={styles.pos4}>4</label>
        </p>
    </>
}

export default Visual;