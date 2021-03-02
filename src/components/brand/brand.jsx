import React from 'react';
import { useRef,useEffect } from 'react/cjs/react.development';
import styles from './brand.module.css';

const Brand = (props) => {
    const sloganref=useRef(null);
    useEffect(()=>{
        window.addEventListener('scroll', scrollFunc);
    },[])

    const scrollFunc=async ()=>{
        if(sloganref.current===null){
            return;
        }
        if(!sloganref.current.classList.contains(styles.show)){
            const scrolly=sloganref.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                sloganref.current.classList.add(styles.show);
            }
        }
        else{
            window.removeEventListener('scroll',scrollFunc);
        }
    }

    return <section className={styles.brand}>
        <h2 className={styles.title}>Brand 소개</h2>
        <div className={styles.brandImg}>
            <div className={styles.brandContent}>
                <span className={styles.description}>
                <p>안녕하십니까 JKFOOD 대표 박진국입니다.</p>
                <p>저희 갈비쌈 냉면은 메밀냉면에 숯불갈비와 같이 싸먹는 음식입니다.</p>
                <p>갈비쌈 냉면의 시작은 <strong>왜? 냉면은 갈비집에서 갈비를 먹은 후 후식으로 먹을때 가장 맛있을까?</strong> 라는 의문과 함께 시작되었습니다.</p>
                <p>냉면을 주문하면 갈비와 함께 제공하게 되었고 이것은 순식간에 인기를 끌어 구미지역에서 가맹문의가 생겨나기 시작했습니다.</p>
                <p>2021년 현재 저희 갈비쌈 냉면은 구미 전지역에 가맹점을 보유하고 있으며, 경북 전지역으로 확장해 나가고 있습니다.</p>
                </span>
            </div>
        </div>
        <h2 className={styles.title2}>갈비쌈 냉면 소개</h2>
        <hr/>
        <div className={styles.sloganBox} ref={sloganref}>
            <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/%EB%83%89%EB%A9%B4logo2.png" alt="brandfood"/>
            <div className={styles.descriptionBox}>
                <div className={styles.description}>
                    <p>갈비주는 설악갈비쌈냉면</p>
                    <h3>설악본가</h3>
                    <p className={styles.back}>SEORAK BONGA</p>
                    <span>
                        <p>집앞까지 전해드리는 25년 전통의 깊은 맛!</p>
                        <p>최고의 맛을 지향하는 장인정신은 "설악"만의 자랑이자 보람입니다.</p>
                        <p>25년 전통에서 우러나오는 맛의 예술은 어떤 미식가도 만족시켜 드립니다.</p>
                    </span>
                </div>
                <table className={styles.Info}>
                    <tbody>
                        <tr>
                            <th>회&nbsp;사&nbsp;명</th>
                            <td>JK FOOD(주)</td>
                        </tr>
                        <tr>
                            <th>대 표 이 사</th>
                            <td>박진국</td>
                        </tr>
                        <tr>
                            <th>대 표 전 화</th>
                            <td>010-7515-9710</td>
                        </tr>
                        <tr>
                            <th>물 류 센 터</th>
                            <td>경북 구미시 산동면 임봉길 27-14, 1동 1층</td>
                        </tr>
                        <tr>
                            <th>본&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사</th>
                            <td>경북 구미시 산호대로31길 12-23(옥계동)</td>
                        </tr>
                        <tr>
                            <th>사업자등록번호</th>
                            <td>141-19-01355</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
}

export default Brand;