import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Catalog from './pages/Catalog/Catalog'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
