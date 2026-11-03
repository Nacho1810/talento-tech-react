import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { ProductFormContainer } from './components/adminComponents/ProductForm/ProductFormContainer';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './components/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {

  return (
    <div className="app-shell">

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView />} />
        </Route>

        <Route path='/admin/login' element={<Login />} />

        <Route path='/admin' element={<ProtectedRoute> <AdminLayout /> </ProtectedRoute>} >

          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='products/new' element={<ProductFormContainer />} />
          <Route path='products/success/:id' element={<ProductSuccess />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App;
