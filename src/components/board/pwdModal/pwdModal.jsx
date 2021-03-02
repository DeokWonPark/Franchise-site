import React from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './pwdModal.module.css';

const PwdModal = ({isOpen,onClose,verificationPwd}) => {
    const inputRef=useRef(null);
    const handleClose=(event)=>{
        onClose(event)
    }

    const sumitPassword=(event)=>{
        event.preventDefault();
        verificationPwd(inputRef.current.value || "");
    }
    return <div className={`${styles.modal} ${isOpen?styles.open:""}`}>
        <button className={styles.close}><i className="fas fa-times" id="close" onClick={handleClose}></i></button>
        <div className={styles.info}>
            <p className={styles.color}>Password로 보호된 글 입니다.</p>
            <p>작성자와 관리자만 열람하실 수 있습니다.</p>
            <p>본인이시라면 비밀번호를 입력하세요.</p>
        </div>
        <form className={styles.form}>
            <input type="password" name="password" required ref={inputRef} autoFocus/>
            <button onClick={sumitPassword}>확인</button>
        </form>
    </div>
}

export default PwdModal;