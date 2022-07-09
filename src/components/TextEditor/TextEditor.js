import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";

const TextEditor = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false,
        colorPickerDefaultTab: 'color',
        minHeight: 400,
        iframe: true
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { }}
        />
    );
}

export default TextEditor