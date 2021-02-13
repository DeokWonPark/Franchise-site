import React from 'react';
import { useEffect, useRef } from 'react/cjs/react.development';
import styles from './infomation.module.css';

const Infomation = (props) => {

    const infoRef=useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll', scrollInfoFunc);
    },[])

    const scrollInfoFunc=async ()=>{
        if(infoRef.current===null){
            return;
        }
        if(!infoRef.current.classList.contains(styles.show)){
            const scrolly=infoRef.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                infoRef.current.classList.add(styles.show);
            }
        }
        else{
            const scrolly=infoRef.current.getBoundingClientRect().top;
            if(window.innerHeight < scrolly){
                infoRef.current.classList.remove(styles.show);
            }
            //window.removeEventListener('scroll',scrollInfoFunc);
        }
    }

    return <section className={styles.infomation} ref={infoRef}>
        <div className={styles.infomationBox}>
            <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EA%B0%80%EA%B2%8C%EB%82%B4%EB%B6%80%ED%99%80.PNG" alt="infoImg" className={styles.infoImg}/>
            <div className={styles.infoBox}>
                <span className={styles.infoTitle}>
                    <h2>갈비와 함께 즐기는 냉면의 원조</h2>
                    <h2>갈비쌈 냉면 - 설악본가 -</h2>
                </span>
                <span className={styles.infoDescription}>
                    <p>저희 갈비쌈 냉면은 차별화된 맛과 서비스로 승부하며</p>
                    <p>구미에서 최초로 시작된 갈비와 냉면을 함께 즐기는 브랜드입니다.</p>
                    <p>#갈쌈냉면 #갈비는 공짜 #설악본가 #여름엔 초계냉면</p>
                </span>
                <div className={styles.infoBtn}>
                    <button>가맹문의</button>
                    <button>브랜드 소개</button>
                    <button>커뮤니티</button>
                </div>
            </div>
        </div>
    </section>
}

export default Infomation;