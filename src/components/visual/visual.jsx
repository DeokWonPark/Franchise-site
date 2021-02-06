import React from 'react';
import styles from './visual.module.css';

const Visual = (props) => {
    return <section className={styles.visual}>
        <span className={styles.foodInfo}>
            <div className={styles.foodInfohead}>
                <img className={styles.blog} src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/>
                <p>인기맛집</p>
            </div>
            <h2>갈비쌈 냉면</h2>
            <p>새콤한 냉면과 달콤한 갈비의 조화로운 맛</p>
        </span>
    </section>
}

export default Visual;