import React from 'react';
import Nav from '../nav/nav';
import styles from './header.module.css';

const Header = (props) => {
    return <header>
        <div className={styles.inner}>
            <div className={styles.sidebox}>
                <div className={styles.sideBtn}>
                    <p>로그인</p>
                    <p>|</p>
                    <p>가맹문의</p>
                </div>
                <div className={styles.sideBtn}>
                    <button className={styles.blogBtn}><img src="../images/naver_logo.png" alt="blog"/></button>
                    <button className={styles.membershipBtn}><i class="fas fa-phone-square"></i></button>
                    <button className={styles.membershipBtn}><i class="fas fa-comments"></i></button>
                </div>
            </div>
            <Nav></Nav>
            <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/main_logo.png" alt="logo" className={styles.logo}/>
        </div>
    </header>
}

export default Header;