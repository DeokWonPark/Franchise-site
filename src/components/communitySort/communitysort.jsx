import React from 'react';
import Board from '../board/board';
import Write from '../write/write';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react/cjs/react.development';

const Communitysort = (props) => {
    const param=useParams();
    const [curComponents,setCur]=useState(null);
    const [components,setComponents]=useState([
        {sort:"고객 게시판", components:<Board></Board>},
        {sort:"가맹문의", components:<Write></Write>},
        {sort:"공지사항", components:<></>},
    ]);

    useEffect(()=>{
        const cur=components.find((i)=> i.sort===param.sort).components;
        setCur(cur);
    })

    return<>
        {curComponents}
    </>
}

export default Communitysort;