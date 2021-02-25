import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import styles from './boardItem.module.css';

const BoardItem = ({item,num,onModal}) => {
    const [modalOpen,setOpen]=useState(false);
    const history=useHistory();
    const handleClick=()=>{
        onModal(item);
        // const input=prompt("작성자 본인만 열람이 가능합니다. \n 비밀번호를 입력해 주세요!");
        // if(input!==item.password){
        //     alert("비밀번호가 일치하지 않습니다.");
        //     return;
        // }
        // history.push(`/COMMUNITY/고객 게시판/${item.id}`);
    }
    return <tr className={styles.data} onClick={handleClick}>
        <td>{num}</td>
        <td className={styles.title}>&nbsp;<i className="fas fa-lock"></i> {item.title}</td>
        <td>{item.name}</td>
        {/* <td>{item.Lookup}</td> */}
        <td>-</td>
        <td>{item.date}</td>
        <td className={item.confirm?styles.on:styles.off}><p></p></td>
    </tr>
}

export default BoardItem;