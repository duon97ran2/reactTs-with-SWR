import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'react-quill/dist/quill.snow.css';
import AppHeader from './components/AppHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import CategoryProduct from './pages/client/CategoryProduct';
import Detail from './pages/client/Detail';
import Cart from './pages/client/Cart';
import PrivateRouter from './components/PrrivateRouter';
import useAuth from './hooks/useAuth';


function App() {
  const { cache } = useAuth();
  const [userRole, setUserRole] = useState(0)
  const role = cache.get("user")?.role;
  const location = useLocation();
  useEffect(() => { setUserRole(role); }, [role]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:id" element={<CategoryProduct />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/detail" element={<ProductDetail />} />

        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='/admin' element={<PrivateRouter role={userRole}><AdminLayout /></PrivateRouter>} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<Navigate to="list" />} />
            <Route path="list" element={<ListPhone />} />
            <Route path="list/:id" element={<ListPhone />} />
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
