import React from 'react';
import Write from '../write/write';
import Notice from '../notice/notice';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import BoardAll from '../boardAll/boardAll';

const Communitysort = ({fileUpload,database}) => {
    const param=useParams();
    const [curComponents,setCur]=useState(null);
    const [components,setComponents]=useState([
        {sort:"고객 게시판", components:<BoardAll database={database}></BoardAll>},
        {sort:"가맹문의", components:<Write fileUpload={fileUpload} database={database}></Write>},
        {sort:"공지사항", components:<Notice></Notice>},
    ]);

    useEffect(()=>{
        const cur=components.find((i)=> i.sort===param.sort).components;
        setCur(cur);
    },[components,param])

    return<>
        {curComponents}
    </>
}

export default Communitysort;