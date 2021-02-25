import React from 'react';
import styles from './answer.module.css';

const Answer = ({answerRef}) => {
    return <div className={styles.answer}>
        <hr/>
        <textarea name="answer" className={styles.textBox} ref={answerRef} placeholder="답변을 작성해 주세요."></textarea>
    </div>
}

export default Answer;