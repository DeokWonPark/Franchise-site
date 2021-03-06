import React from 'react';
import styles from './editorBox.module.css';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from 'react';

import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const EditorBox = ({setMessage}) => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    useEffect(()=>{
      const textState=editorState.getCurrentContent();
      const textHtml=convertToRaw(textState);
      const markup=draftToHtml(textHtml);
      setMessage(markup);

    },[editorState]);
    
    return <Editor
    editorState={editorState}
    toolbarClassName={styles.toolbarClassName}
    wrapperClassName={styles.wrapperClassName}
    editorClassName={styles.editorClassName}
    onEditorStateChange={setEditorState}
  />
}

export default EditorBox;