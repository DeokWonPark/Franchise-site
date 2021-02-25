import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './board.module.css';
import BoardItem from './boarditem/boardItem'
import { useEffect } from 'react';
import PwdModal from './pwdModal/pwdModal';

const Board = ({database}) => {
    let num=0;
    const history=useHistory();

    const [data,setData]=useState({});
    const [modalOpen,setOpen]=useState(false);
    const [selectItem,setItem]=useState(null);
    const [datalen,setdatalen]=useState(Object.keys(data).length);

    useEffect(()=>{
        const unmount=database.read(`Question/`,(data)=>{
            setData(data);
            setdatalen(Object.keys(data).length);
        });
        return ()=>{unmount();}
    },[database])

    //const param=useParams();

    const handleClick=(item)=>{
        setOpen(true);
        const html=document.querySelector("html");
        html.style.overflow = "hidden";

        setItem(item);
    }

    const verificationPwd=(inputData)=>{
        console.log(selectItem);
        
        setOpen(false);
        const html=document.querySelector("html");
        html.style.overflow = "auto";

        if(inputData===selectItem.password){
            history.push(`/COMMUNITY/고객 게시판/${selectItem.id}`);
        }
        else{
            alert("비밀번호가 일치하지 않습니다.");
        }
    }

    const handleModalClose=(event)=>{
        if(event.target.id==="bgbox" || event.target.id==="close" || event.target.tagName==="path"){
            setOpen(false);
            const html=document.querySelector("html");
            html.style.overflow = "auto";
        }
    }

    return <><section className={styles.board}>
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
                {Object.keys(data).map((key)=>{
                    num++;
                    return <BoardItem item={data[key]} key={num} num={num} onModal={handleClick}></BoardItem>
                })}
            </tbody>
        </table>
        <ul className={styles.pagination}>
            <li><Link to="/COMMUNITY/고객 게시판/"><i className="fas fa-angle-double-left"></i></Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/">1</Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/end"><i className="fas fa-angle-double-right"></i></Link></li>
        </ul>
    </section>
    {modalOpen?<div 
    className={styles.ModalBox} 
    onClick={handleModalClose} 
    id="bgbox">
    <PwdModal isOpen={modalOpen} onClose={handleModalClose} verificationPwd={verificationPwd}></PwdModal>
    </div>:null}
    </>
}

export default Board;