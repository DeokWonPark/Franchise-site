import React from 'react';
import { useRef, useState } from 'react/cjs/react.development';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './board.module.css';
import BoardItem from './boarditem/boardItem'
import { useEffect } from 'react';
import PwdModal from './pwdModal/pwdModal';
import WriteView from './writeView/writeView';

const Board = ({database}) => {
    let num=0;
    const history=useHistory();
    const param=useParams();

    const [data,setData]=useState({});
    const [modalOpen,setOpen]=useState(false);
    const [selectItem,setItem]=useState(null);
    const [writeView,setView]=useState(false);
    const [datalen,setdatalen]=useState(Object.keys(data).length);

    useEffect(()=>{
        const unmount=database.read(`Question/`,(data)=>{
            setData(data);
            setdatalen(Object.keys(data).length);
        });
        return ()=>{unmount();}
    },[database])

    useEffect(()=>{
        if(param.id[0]==="v"){
            setView(true);
        }
        else{
            setView(false);
        }
    },[param])

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

    const removeWrite=(id)=>{
        database.remove(`Question/${id}`);
        history.push("/COMMUNITY/고객 게시판/1");
    }

    const handleAddAnswer=(text,item)=>{
        console.log(text,item);//
        const date=new Date();
        const dateNow=`${date.getFullYear()} / ${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1} - ${date.getDate()}`;
        const update={...item};
        const newMessage=`${update.message} <div id="answer"> <hr/> <p>답변 - ${dateNow}</p> <pre>${text}</pre> </div>`;
        update.message=newMessage;
        console.log(update);//
        database.write(`Question/${item.id}`,update);

    }

    return <>{!writeView?<section className={styles.board}>
        <h2 className={styles.title}>고객 게시판</h2>
        <div className={styles.topBox}>
            <span>{`Total ${datalen}건 1 페이지`}</span>
            <button><Link to="/COMMUNITY/가맹문의/1" className={styles.link}><i className="fas fa-pencil-alt"></i>가맹문의</Link></button>
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
            <li><Link to="/COMMUNITY/고객 게시판/1"><i className="fas fa-angle-double-left"></i></Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/1">1</Link></li>
            <li><Link to="/COMMUNITY/고객 게시판/1"><i className="fas fa-angle-double-right"></i></Link></li>
        </ul>
    </section>:<WriteView data={data} onDelete={removeWrite} onAdd={handleAddAnswer}></WriteView>}
    {modalOpen?<div 
    className={styles.ModalBox} 
    onClick={handleModalClose} 
    id="bgbox">
    <PwdModal isOpen={modalOpen} onClose={handleModalClose} verificationPwd={verificationPwd}></PwdModal>
    </div>:null}
    </>
}

export default Board;