import React from 'react';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = memo(({navref}) => {
    const history=useHistory();
    const handlepush=(e)=>{
        const path=e.target.dataset.value;
        if(path===undefined){
            return;
        }
        history.push(`${path}`);
    }
    return <nav ref={navref}>
        <ul onClick={handlepush}>
            <li data-value="/BRAND/Brand 소개">BRAND</li>
            <li data-value="/MENU/전체 메뉴">MENU</li>
            <li data-value="/FRANCHISE/FRANCHISE 소개">FRANCHISE</li>
            <li data-value="/STORE/오시는 길">STORE</li>
            <li data-value="/COMMUNITY/고객 게시판/1">COMMUNITY</li>
        </ul>
    </nav>
})

export default Nav;