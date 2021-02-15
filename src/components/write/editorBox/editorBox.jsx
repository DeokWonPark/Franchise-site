import React from 'react';
import styles from './editorBox.module.css';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorBox = (props) => {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    return <Editor
    editorState={editorState}
    toolbarClassName={styles.toolbarClassName}
    wrapperClassName={styles.wrapperClassName}
    editorClassName={styles.editorClassName}
    onEditorStateChange={setEditorState}
  />;
}

export default EditorBox;