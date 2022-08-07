import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css';
import './index.css'
import { SWRConfig } from 'swr';
import instance from './api/instance';
interface Cache<Data> {
  get(key: string): Data | undefined
  set(key: string, value: Data): void
  delete(key: string): void
}
ReactDOM.createRoot(document.getElementById('root')!).render(

  <SWRConfig value={{
    fetcher: async (url) => await instance.get(url),
    provider: (cache: Cache<any>) => {
      const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));
      window.addEventListener('beforeunload', () => {
        const appCache = JSON.stringify(Array.from(map.entries()))
        localStorage.setItem('app-cache', appCache)
      })
      return map
    }
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>

)
