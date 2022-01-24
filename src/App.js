import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Catalog from './pages/Catalog/Catalog'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='product/:productId' element={<Product />} />
        <Route
          path='*'
          element={
            <main>
              <p>404</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
