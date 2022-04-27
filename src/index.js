import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/nevbar';
import TextForm from './component/TextForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar name="Test App"/>
    <TextForm  heading="Enter The text to analyze"/>
  </React.StrictMode>
);