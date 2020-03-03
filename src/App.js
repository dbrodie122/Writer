import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function App() {
  return (
    <div className='App'>
      <Editor />
    </div>
  );
}

export default App;
