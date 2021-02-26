import React from 'react';
import { useState } from 'react';
import styles from './boardItem.module.css';

const BoardItem = ({item,num,onModal}) => {
    const [Lookup,setLookup]=useState(0);
    const handleClick=()=>{
        onModal(item);
        setLookup(Lookup+1)
    }
    return <tr className={styles.data} onClick={handleClick}>
        <td>{num}</td>
        <td className={styles.title}>&nbsp;<i className="fas fa-lock"></i> {item.title}</td>
        <td>{item.name}</td>
        {/* <td>{Lookup}</td> */}
        <td>-</td>
        <td>{item.date}</td>
        <td className={item.confirm?styles.on:styles.off}><p></p></td>
    </tr>
}

export default BoardItem;