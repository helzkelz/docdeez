import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapesEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;
    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      storageManager: { autoload: false },
      plugins: [],
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Drag & Drop Site Editor (GrapesJS)</h2>
      <div ref={editorRef} />
    </div>
  );
};

export default GrapesEditor;
