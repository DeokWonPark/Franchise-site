import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react/cjs/react.development';
import styles from './writeView.module.css';

const WriteView = ({data,onDelete}) => {
    const param=useParams();
    const mainRef=useRef(null);
    const [item,setItem]=useState();

    useEffect(()=>{
        const id=param.id.substring(1,param.id.length);
        setItem(data[id]);

        item && (mainRef.current.innerHTML=item.message);
    });

    const handleDelete=()=>{
        const result=window.confirm('해당 게시글을 정말 삭제 하시겠습니까?');
        if(result===true){
            onDelete(item.id);
        }
    }
    console.log(item)
    return <>{item && <section className={styles.writeBox}>
        <div className={styles.inner}>
            <div className={styles.info}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.meta}>
                    <p>{`작성일 ${item.date}`}</p>
                    <p>|</p>
                    <p>{`작성자 ${item.name}`}</p>
                </div>
            </div>
            <div className={styles.main} ref={mainRef}></div>
            <div className={styles.file}>{item.file!=="#"?<a href={item.file} download={item.fileName}>{`첨부파일 ${item.fileName}`}</a>:<></>}</div>
            <div className={styles.footerBtn}>
                <button className={styles.highlight}>답변</button>
                {/* <button>수정</button> */}
                <button onClick={handleDelete}>삭제</button>
            </div>
        </div>
    </section>}</>
}

export default WriteView;