import React from 'react';
import styles from './sidebar.module.css';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = memo((props) => {
    return <>
        <button className={styles.sidebarBtn}>
            <Link to="/COMMUNITY/가맹문의/1">
                <i className="fas fa-clipboard-check"></i>
                <p>가맹문의</p>
            </Link>
        </button>
    </>
})

export default Sidebar;