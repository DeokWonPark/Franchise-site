import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import Nav from '../nav/nav';
import styles from './header.module.css';

const Header = (props) => {
    const history=useHistory();
    const navref=useRef(null);
    const sideref=useRef(null);

    const handletoggle=()=>{
        navref.current.classList.toggle(styles.toggle);
        sideref.current.classList.toggle(styles.toggle);
    }
    const handlehome=()=>{
        history.push("/");
    }
    return <header>
        <div className={styles.inner}>
            <div className={styles.sidebox} ref={sideref}>
                <div className={styles.sideBtn}>
                    <p>로그인</p>
                    <p>|</p>
                    <p>가맹문의</p>
                </div>
                <div className={styles.sideBtn}>
                    <button className={styles.blogBtn}><a href="https://blog.naver.com/skyh1526ss"><img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/></a></button>
                    <button className={styles.membershipBtn}><i className="fas fa-phone-square"></i></button>
                    <button className={styles.membershipBtn}><i className="fas fa-comments"></i></button>
                    <button className={styles.userBtn}><i className="fas fa-user"></i></button>
                </div>
            </div>
            <Nav navref={navref}></Nav>
            <div className={styles.logo} onClick={handlehome}>
                <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/main_logo.png" alt="logo"/>
                <button className={styles.hambuger} onClick={handletoggle}><i className="fas fa-bars"></i></button>
            </div>
        </div>
    </header>
}

export default Header;