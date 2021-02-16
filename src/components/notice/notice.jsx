import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from './notice.module.css';

const Notice = (props) => {
    const [notice,setNotice]=useState([]);
    return <section className={styles.Notice}>
        <h2 className={styles.title}>공지사항</h2>
        <div className={styles.infoBox}>
            <p>{`전체 ${notice.length}건`}</p>
            <div>
                <input type="text"/>
                <button className={styles.search}><i className="fas fa-search"></i></button>
            </div>
        </div>
        <table className={styles.noticeTable}>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
            </tr>
        </table>
        <div className={styles.nodata}>등록된 데이터가 없습니다.</div>
    </section>
}

export default Notice;