import React, { useEffect, useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import webpagePreset from 'grapesjs-preset-webpage';
import postCssParser from 'grapesjs-parser-postcss';
import './Editor.css';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const loadEditor = async () => {
      if (editorRef.current) {
        const editor = grapesjs.init({
          container: editorRef.current,
          height: '100vh',
          width: 'auto',
          storageManager: false,
          plugins: [webpagePreset, postCssParser],
          pluginsOpts: {
            [webpagePreset as any]: { /* options */ },
          },
        });

        try {
          // Fetch the live homepage content
          const response = await fetch('/');
          const html = await response.text();

          // Use DOMParser to extract the content from the main Docusaurus element
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('#__docusaurus');

          if (mainContent) {
            editor.setComponents(mainContent.innerHTML);
            
            // Extract and apply styles
            const styles = doc.head.querySelectorAll('style');
            let css = '';
            styles.forEach(style => {
              css += style.innerHTML;
            });
            editor.setStyle(css);
          } else {
            console.error("Could not find '__docusaurus' element to load content from.");
          }
        } catch (error) {
          console.error("Failed to fetch and load homepage content:", error);
        }
      }
    };

    loadEditor();
    
    // Cleanup editor on component unmount
    return () => {
        // This part is tricky with async init, for now we'll skip detailed cleanup
    };
  }, []);

  return <div ref={editorRef} />;
};

export default Editor;
