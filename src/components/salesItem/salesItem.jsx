import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './salesItem.module.css';

const SalesItem = memo(({salesItem,handleArrow}) => {
    const goMarket=()=>{
        alert("죄송합니다. 현재 준비중인 서비스입니다!");
    }
    return <li className={styles.salesItem}>
        <button className={styles.arrow} onClick={handleArrow.bind(this,"left")}><i className="fas fa-chevron-left"></i></button>
        <div className={styles.Item}>
            <img src={salesItem.imgURL} alt="itemImg" className={styles.itemImg}/>
            <div className={styles.itemInfo}>
                <h2 className={styles.title}>{salesItem.name}</h2>
                <p className={styles.enName}>{salesItem.enName}</p>
                <p className={styles.description}>{salesItem.description}</p>
                <div className={styles.Btn}>
                    <button><Link to="/MENU/전체 메뉴">메뉴보기</Link></button>
                    <button className={styles.store} onClick={goMarket}>온라인구매</button>
                </div>
            </div>
        </div>
        <button className={styles.arrow} onClick={handleArrow.bind(this,"right")}><i className="fas fa-chevron-right"></i></button>
    </li>
})

export default SalesItem;