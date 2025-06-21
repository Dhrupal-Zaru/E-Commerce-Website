import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./features/AppLayout"
import Shop from "./pages/Shop"
import Purse from "./pages/Purse"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import SearchProvider from "./context/SearchContext"


function App() {

  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Shop />} />
            <Route path="/purse" element={<Purse />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  )
}

export default App
