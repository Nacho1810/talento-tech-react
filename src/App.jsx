import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';

function App() {

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main background-primary">
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
