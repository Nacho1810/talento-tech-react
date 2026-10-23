import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main background-primary">
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<h1>Mi Carrito</h1>} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQgVUHio7XFPpSMPnOzIOHeL4aJrC2iYI",
  authDomain: "chino-feliz-talentotech.firebaseapp.com",
  projectId: "chino-feliz-talentotech",
  storageBucket: "chino-feliz-talentotech.firebasestorage.app",
  messagingSenderId: "15644598320",
  appId: "1:15644598320:web:6f5dc9043220ccaca28df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default App;
