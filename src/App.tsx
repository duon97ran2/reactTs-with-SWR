import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/client/Home';
import ProductDetail from './pages/client/ProductDetail';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ListPhone from './pages/admin/phone/ListPhone';
import CreatePhone from './pages/admin/phone/CreatePhone';
import ListCate from './pages/admin/category/ListCate';
import EditCate from './pages/admin/category/EditCate';
import UpdatePhone from './pages/admin/phone/UpdatePhone';


function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/detail" element={<ProductDetail />} />

        </Route>
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='cellphone'>
            <Route index element={<Navigate to="list" />} />
            <Route path="list" element={<ListPhone />} />
            <Route path="create" element={<CreatePhone />} />
            <Route path="edit/:id" element={<UpdatePhone />} />
          </Route>
          <Route path='category'>
            <Route index element={<Navigate to="list" />} />
            <Route path='list' element={<ListCate />} />
            <Route path='edit/:id' element={<EditCate />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
