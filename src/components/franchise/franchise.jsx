import React from 'react';
import styles from './franchise.module.css';

const Franchise = (props) => {
    return <section className={styles.Franchise}>
        <h2>FRANCHISE 소개</h2>
        <hr/>
        <div className={styles.infoBox}>
            <div className={styles.info}>
                <i className="far fa-grin-hearts"></i>
                <p>갈비쌈 냉면 대표</p>
                <h3>박진국 대표</h3>
            </div>
            <div className={styles.info}>
                <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%B0%B0%EB%AF%BClogo.jpg" alt="rider"/>
                <p>배달의 민족</p>
                <h3>맛집랭킹 1위</h3>
            </div>
            <div className={styles.info}>
                <i className="fas fa-map-marked-alt"></i>
                <h3>구미 전지역 가맹점 보유</h3>
            </div>
            <div className={styles.info}>
                <i className="fas fa-envelope"></i>
                <h3>가맹문의</h3>
            </div>
        </div>
    </section>
}

export default Franchise;