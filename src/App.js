/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Shopping from './Shopping'
import ShoppingAdd from './ShoppingAdd'
import ProductDetail from './ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/shopping/add' element={<ShoppingAdd />} />
          <Route path='/shopping/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
