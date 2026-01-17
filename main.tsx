import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // 여기가 ./services/App.tsx 로 되어있으면 안됩니다!
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
