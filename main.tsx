import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// [긴급 처방] 디자인 도구(Tailwind)를 인터넷에서 강제로 가져옵니다.
// (index.css 파일이 없어도 화면이 깨지지 않게 만듭니다)
const cdnScript = document.createElement('script');
cdnScript.src = "https://cdn.tailwindcss.com";
document.head.appendChild(cdnScript);

// [긴급 처방] 배경을 강제로 검은색으로 고정합니다.
const defaultStyle = document.createElement('style');
defaultStyle.innerHTML = `
  body { 
    background-color: black !important; 
    color: white !important; 
    margin: 0; 
  }
`;
document.head.appendChild(defaultStyle);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
