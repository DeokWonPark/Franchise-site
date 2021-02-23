import React from 'react';
import { useHistory,Link } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import Nav from '../nav/nav';
import styles from './header.module.css';

const Header = (props) => {
    const history=useHistory();
    const navref=useRef(null);
    const sideref=useRef(null);
    const headerref=useRef(null);

    const handletoggle=()=>{
        navref.current.classList.toggle(styles.toggle);
        sideref.current.classList.toggle(styles.toggle);
    }
    const handlehome=()=>{
        history.push("/");
    }

    const GoMarket=()=>{
        alert("죄송합니다. 현재 준비중인 서비스입니다!");
    }
    return <header ref={headerref}>
        <div className={styles.inner}>
            <div className={styles.sidebox} ref={sideref}>
                <div className={styles.sideBtn}>
                    <Link to="/COMMUNITY/공지사항">
                        <p>공지 게시판</p>
                    </Link>
                    <p>|</p>
                    <Link to="/COMMUNITY/가맹문의">
                        <p>가맹문의</p>
                    </Link>
                </div>
                <div className={styles.sideBtn}>
                    <button className={styles.blogBtn}><a href="https://blog.naver.com/skyh1526ss"><img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/naver_logo.png" alt="blog"/></a></button>
                    <button className={styles.storeBtn} onClick={GoMarket}><span>Oline Market</span></button>
                    {/* <button className={styles.membershipBtn}><a href="tel:010-7515-9710"><i className="fas fa-phone-square"></i></a></button>
                    <button className={styles.membershipBtn}><Link to="/COMMUNITY/가맹문의"><i className="fas fa-comments"></i></Link></button> */}
                    {/* <button className={styles.userBtn}><i className="fas fa-user"></i></button> */}
                </div>
            </div>
            <Nav navref={navref}></Nav>
            <div className={styles.logo}>
                <img src="https://raw.githubusercontent.com/DeokWonPark/Franchise-site/master/public/images/logo2.png" alt="logo" onClick={handlehome}/>
                <button className={styles.hambuger} onClick={handletoggle}><i className="fas fa-bars"></i></button>
            </div>
        </div>
    </header>
}

export default Header;