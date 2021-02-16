import React from 'react';
import { useState } from 'react/cjs/react.development';
import {Link, useParams} from 'react-router-dom';
import styles from './board.module.css';
import BoardItem from './boarditem/boardItem'

const Board = (props) => {
    const [data,setData]=useState([
        {
            num:3,
            title:"문의 드립니다.",
            name:"김영지",
            Lookup:"7",
            date:"02-16",
            confirm:false,
            password:"qwe123",
        },
        {
            num:2,
            title:"가맹문의 드립니다!!",
            name:"김종국",
            Lookup:"3",
            date:"02-15",
            confirm:false,
            password:"abcde556",
        },
        {
            num:1,
            title:"가맹문의 드립니다.",
            name:"한수호",
            Lookup:"2",
            date:"02-13",
            confirm:true,
            password:"ejrdnjs123",
        },
    ])
    const [datalen,setdatalen]=useState(data.length);

    const param=useParams();
    console.log(param)
    return <section className={styles.board}>
        <h2 className={styles.title}>고객 게시판</h2>
        <div className={styles.topBox}>
            <span>{`Total ${datalen}건 1 페이지`}</span>
            <button><Link to="/COMMUNITY/가맹문의" className={styles.link}><i className="fas fa-pencil-alt"></i>가맹문의</Link></button>
        </div>
        <table className={styles.boardTable}>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>조회</th>
                <th>날짜</th>
                <th>확인</th>
            </tr>
            {data.map((item)=>{
                return <BoardItem item={item} key={item.num}></BoardItem>
            })}
        </table>
        <ul className={styles.pagination}>
            <li><Link to="/COMMUNITY/고객 게시판/"><i className="fas fa-angle-double-left"></i></Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/">1</Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/end"><i className="fas fa-angle-double-right"></i></Link></li>
        </ul>
    </section>
}

export default Board;