import React from 'react';
import styles from './menuBox.module.css';

const menuBox = ({box}) => {
    return <div className={styles.menuBox}>
        <h2>{box.koname}</h2>
        <h3>{box.enname}</h3>
    </div>
}

export default menuBox;