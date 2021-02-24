import React from 'react';
import { useState } from 'react/cjs/react.development';
import {Link, useParams} from 'react-router-dom';
import styles from './board.module.css';
import BoardItem from './boarditem/boardItem'
import { useEffect } from 'react';

const Board = ({database}) => {
    let num=0;
    const [data,setData]=useState({});

    useEffect(()=>{
        const unmount=database.read(`Question/`,(data)=>{
            setData(data);
            setdatalen(Object.keys(data).length);
        });
        return ()=>{unmount();}
    },[database])

    const [datalen,setdatalen]=useState(Object.keys(data).length);

    const param=useParams();
    return <section className={styles.board}>
        <h2 className={styles.title}>고객 게시판</h2>
        <div className={styles.topBox}>
            <span>{`Total ${datalen}건 1 페이지`}</span>
            <button><Link to="/COMMUNITY/가맹문의" className={styles.link}><i className="fas fa-pencil-alt"></i>가맹문의</Link></button>
        </div>
        <table className={styles.boardTable}>
            <tbody>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>조회</th>
                    <th>날짜</th>
                    <th>확인</th>
                </tr>
                {/* {data.map((item)=>{
                    num++;
                    return <BoardItem item={item} key={num} num={num}></BoardItem>
                })} */}
                {Object.keys(data).map((key)=>{
                    num++;
                    return <BoardItem item={data[key]} key={num} num={num}></BoardItem>
                })}
            </tbody>
        </table>
        <ul className={styles.pagination}>
            <li><Link to="/COMMUNITY/고객 게시판/"><i className="fas fa-angle-double-left"></i></Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/">1</Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/end"><i className="fas fa-angle-double-right"></i></Link></li>
        </ul>
    </section>
}

export default Board;