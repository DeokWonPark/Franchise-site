import React from 'react';
import styles from './write.module.css';
import EditorBox from './editorBox/editorBox';
//import ReactEncrypt from 'react-encrypt'; 
import { useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Write = ({fileUpload,database}) => {
    const titleRef=useRef(null);
    const nameRef=useRef(null);
    const passwordRef=useRef(null);
    const fileRef=useRef(null);
    const textRef=useRef(null);

    const [files,setFiles]=useState({fileURL:null,fileName:null});
    const [loading,setLoading]=useState(false);
    const [message,setMessage]=useState(null);

    const history=useHistory();

    const handlesubmit=async (event)=>{
        const date=new Date();
        const write={
            id:Date.now(),
            title:titleRef.current.value,
            name:nameRef.current.value,
            password:passwordRef.current.value,
            file:files.fileURL || "#",
            fileName:files.fileName || "",
            message:message || "",
            text:textRef.current.value || "",
            date:`${date.getFullYear()} / ${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1} - ${date.getDate()}`,
            confirm:false,
        }
        database.write(`Question/${write.id}`,write);
        history.push("/COMMUNITY/고객 게시판/1");
    }

    const onFileChanged=async (event)=>{
        setLoading(true);
        fileRef.current.disabled="disabled";
        const upload=await fileUpload.uploadFile(event.target.files[0]);
        fileRef.current.removeAttribute("disabled");
        setLoading(false);
        setFiles({fileURL:upload.secure_url,fileName:`${upload.original_filename}.${upload.format}`});
    }

    return <section className={styles.write}>
        <h2 className={styles.title}>가맹문의</h2>

        <div className={styles.writeBox}>
            <table className={styles.writeTable}>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" required ref={titleRef}/></td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td><input type="text" className={styles.short} required ref={nameRef}/></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input type="password" className={styles.short} required ref={passwordRef}/></td>
                    </tr>
                    <tr>
                        <th>비밀글</th>
                        <td>* 해당글 작성시 무조건 비밀글로 설정됩니다.</td>
                    </tr>
                    <tr>
                        <th>첨부</th>
                        <td><input type="file" ref={fileRef} onChange={onFileChanged} className={styles.short}/>{loading && <div className={styles.loading}></div>}</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.editorBox}>
                <EditorBox setMessage={setMessage}></EditorBox>
                <textarea className={styles.textarea} ref={textRef}></textarea>
            </div>
            <button className={styles.submit} onClick={handlesubmit}>등록</button>
        </div>
    </section>
}

export default Write;