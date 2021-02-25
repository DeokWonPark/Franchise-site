import React from 'react';
import styles from './pwdModal.module.css';

const PwdModal = ({isOpen,onClose}) => {
    const handleClose=(event)=>{
        onClose(event)
    }
    return <div className={`${styles.modal} ${isOpen?styles.open:""}`}>
        <button className={styles.close}><i className="fas fa-times" id="close" onClick={handleClose}></i></button>
        <div className={styles.info}>
            <p className={styles.color}>Password로 보호된 글 입니다.</p>
            <p>작성자와 관리자만 열람하실 수 있습니다.</p>
            <p>본인이시라면 비밀번호를 입력하세요.</p>
        </div>
        <form className={styles.form}>
            <input type="password" name="password" required/>
            <button>확인</button>
        </form>
    </div>
}

export default PwdModal;