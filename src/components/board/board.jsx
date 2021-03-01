import React from 'react';
import {useState } from 'react/cjs/react.development';
import {useHistory} from 'react-router-dom';
import styles from './board.module.css';
import BoardItem from './boarditem/boardItem'
import PwdModal from './pwdModal/pwdModal';

const Board = ({data}) => {
    const history=useHistory();

    const [modalOpen,setOpen]=useState(false);
    const [selectItem,setItem]=useState(null);

    const handleClick=(item)=>{
        setOpen(true);
        const html=document.querySelector("html");
        html.style.overflow = "hidden";

        setItem(item);
    }

    const verificationPwd=(inputData)=>{

        setOpen(false);
        const html=document.querySelector("html");
        html.style.overflow = "auto";

        if(inputData===selectItem.password){
            history.push(`/COMMUNITY/고객 게시판/v${selectItem.id}`);
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
    return <>
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
                return <BoardItem item={data[key]} key={key} onModal={handleClick}></BoardItem>
            })}
        </tbody>
    </table>
    {modalOpen?<div 
    className={styles.ModalBox} 
    onClick={handleModalClose} 
    id="bgbox">
    <PwdModal isOpen={modalOpen} onClose={handleModalClose} verificationPwd={verificationPwd}></PwdModal>
    </div>:null}
    </>
}

export default Board;