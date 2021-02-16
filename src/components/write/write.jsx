import React from 'react';
import styles from './write.module.css';
import EditorBox from './editorBox/editorBox'

const Write = (props) => {

    const handlesubmit=(event)=>{
        console.log(event);
    }

    return <section className={styles.write}>
        <h2 className={styles.title}>가맹문의</h2>

        <div className={styles.writeBox}>
            <table className={styles.writeTable}>
                <tr>
                    <th>제목</th>
                    <td><input type="text" required/></td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td><input type="text" className={styles.short} required/></td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td><input type="password" className={styles.short} required/></td>
                </tr>
                <tr>
                    <th>비밀글</th>
                    <td>* 해당글 작성시 무조건 비밀글로 설정됩니다.</td>
                </tr>
                <tr>
                    <th>첨부</th>
                    <td><input type="file"/></td>
                </tr>
            </table>
            <div className={styles.editorBox}>
                <EditorBox></EditorBox>
                <textarea className={styles.textarea}></textarea>
            </div>
            <button className={styles.submit} onClick={handlesubmit}>등록</button>
        </div>
    </section>
}

export default Write;