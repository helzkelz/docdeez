import React, { useState, useEffect } from 'react';
import { initialize } from '@discord/embedded-app-sdk';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    initialize(); // Initialize Discord SDK
  }, []);

  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('model', 'whisper-1');

      // Send to your backend proxy (e.g., Firebase Function)
      const response = await fetch('/api/transcribeAndDrop', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setTranscript(result.transcript);
      setIsRecording(false);
    };

    recorder.start();
    setTimeout(() => recorder.stop(), 5000); // Record for 5 seconds
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Voice Ritual Mirror</h1>
      <button onClick={startRecording} disabled={isRecording}>
        {isRecording ? 'Recording...' : 'Speak Your Ritual'}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default App;
