import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = (props) => {
    return <>
        <button className={styles.sidebarBtn}>
            <i className="fas fa-clipboard-check"></i>
            <p>가맹문의</p>
        </button>
    </>
}

export default Sidebar;