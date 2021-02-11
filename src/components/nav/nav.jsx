import React from 'react';
import styles from './nav.module.css';

const Nav = ({navref}) => {
    return <nav ref={navref}>
        <ul>
            <li>브랜드소개</li>
            <li>메뉴소개</li>
            <li>매장안내</li>
            <li>프랜차이즈</li>
            <li>커뮤니티</li>
        </ul>
    </nav>
}

export default Nav;