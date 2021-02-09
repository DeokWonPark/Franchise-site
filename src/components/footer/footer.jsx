import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    return <footer className={styles.footer}>
        <div className={styles.footerDescription}>
            <span className={styles.description}>
                <p>(주)JK FOOD |&nbsp;</p>
                <p>대표이사 박진국 |&nbsp;</p>
                <p>경북 구미시 산호대로31길 12-23(옥계동) |&nbsp;</p>
                <p>사업자등록번호 141-19-01355</p>
            </span>
            <span className={styles.description}>
                <p>T. 010-7515-9710 |&nbsp;</p>
                <p>T. 054)473-9710 |&nbsp;</p>
                <p>F. 054-471-9825 |&nbsp;</p>
                <p>E. jkp9710@hanmail.net</p>
            </span>
            <span className={styles.description}>
                <p>물류센터: 경북 구미시 산동면 임봉길 27-14, 1동 1층</p>
            </span>
            <span className={styles.description}>
                <p>COPYRIGHT BY 2021 설악본가. ALL RIGHT RESERVED</p>
            </span>
        </div>
        {/* <div className={styles.BtnBox}>
            <button className={styles.blogBtn}><a href="https://blog.naver.com/skyh1526ss"><img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/></a></button>
            <button></button>
        </div> */}
    </footer>
}

export default Footer;