import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css';
import './index.css'
import { SWRConfig } from 'swr';
import instance from './api/instance';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>

)
