import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import {Link, useHistory, useParams} from 'react-router-dom';
import styles from './boardAll.module.css';
import Board from '../board/board';
import WriteView from '../board/writeView/writeView';

const BoardAll = ({database}) => {
    const history=useHistory();
    const param=useParams();
    const [datas,setDatas]=useState({});
    const [dataArr,setDataArr]=useState([]);
    const [datalen,setdatalen]=useState(Object.keys(datas).length);
    const [writeView,setView]=useState(false);
    let index=0;
    let page=0;
    let pageNav=0;
    let id=Number.parseInt(param.id);

    useEffect(()=>{
        if(param.id[0]==="v"){
            setView(true);
        }
        else{
            setView(false);
        }
    },[param])

    useEffect(()=>{
        const unmount=database.read(`Question/`,(data)=>{
            const rev=reverseData(data);
            setDatas(rev);
            setdatalen(Object.keys(datas).length);
        });
        return ()=>{unmount();}
    },[database]);

    useEffect(()=>{
        const dataTempArr=[];
        const datalengh=Object.keys(datas).length;
        setdatalen(datalengh);
        let arrLen=datalengh/10;
        if(datalengh%10===0){
            arrLen--;
        }
        for(let i=0;i<=arrLen;i++){
            dataTempArr.push({});
        }
        for(let i of Object.keys(datas)){
            let key=Number.parseInt(index/10);
            dataTempArr[key][i]=datas[i];
            index++;
        }
        setDataArr(dataTempArr);
    },[datas])

    const reverseData=(data)=>{
        const rev={};
        const keys=Object.keys(data);
        for(let i=keys.length-1;i>=0;i--){
            rev[keys[i]]=data[keys[i]];
        }
        return rev;
    }

    const removeWrite=(id)=>{
        database.remove(`Question/${id}`);
        history.push("/COMMUNITY/고객 게시판/1");
    }

    const handleAddAnswer=(text,item)=>{
        const date=new Date();
        const dateNow=`${date.getFullYear()} / ${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1} - ${date.getDate()}`;
        
        const update={...item};
        const newMessage=`${update.message} <div id="answer"> <hr/> <p>답변 - ${dateNow}</p> <pre>${text}</pre> </div>`;
        update.message=newMessage;
        
        update.confirm=true;

        database.write(`Question/${item.id}`,update);
    }

    return <>{!writeView? <section className={styles.boardAll}>
        <h2 className={styles.title}>고객 게시판</h2>
        <div className={styles.topBox}>
            <span>{`Total ${datalen}건 ${param.id} 페이지`}</span>
            <button><Link to="/COMMUNITY/가맹문의/1" className={styles.link}><i className="fas fa-pencil-alt"></i>가맹문의</Link></button>
        </div>
        {dataArr.map((data)=>{
            page++;
            return <>{Number.parseInt(param.id)===page?<Board data={data} key={data.id}></Board>:<></>}</>
        })}
        <ul className={styles.pagination}>
            <Link to="/COMMUNITY/고객 게시판/1"><li><i className="fas fa-angle-double-left"></i></li></Link>
            {dataArr.map(()=>{
                pageNav++;
                return <Link to={`/COMMUNITY/고객 게시판/${pageNav}`}><li className={id===pageNav?styles.on:""}>{pageNav}</li></Link>
            })}
            <Link to={`/COMMUNITY/고객 게시판/${pageNav}`}><li><i className="fas fa-angle-double-right"></i></li></Link>
        </ul>
    </section>:<WriteView data={datas} onDelete={removeWrite} onAdd={handleAddAnswer}></WriteView>}</>
}

export default BoardAll;