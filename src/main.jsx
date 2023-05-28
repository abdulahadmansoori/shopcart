import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './Pages/Components/ProductContext.jsx'
import SidebarProvider from './Pages/Components/SidebarContext.jsx'
import CartProvider from './Pages/Components/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
