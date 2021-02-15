import React from 'react';
import {Link} from 'react-router-dom';
import styles from './boardItem.module.css';

const BoardItem = ({item}) => {
    return <tr className={styles.data}>
        <td>{item.num}</td>
        <td><Link to={`/COMMUNITY/고객 게시판/${item.num}`}>{item.title}</Link></td>
        <td>{item.name}</td>
        <td>{item.Lookup}</td>
        <td>{item.date}</td>
        <td className={item.confirm?styles.on:styles.off}><p></p></td>
    </tr>
}

export default BoardItem;