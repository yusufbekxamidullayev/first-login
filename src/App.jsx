import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './pages/notfound/NotFound'
const LoginPage = lazy(() => import("./pages/login/Login"))
const Layout = lazy(() => import("./pages/layout/Layout"))
const ProductsPage = lazy(() => import("./pages/products/ProductsPage"))
const CategoriesPage = lazy(() => import("./pages/categories/CategoriesPage"))

function App() {
  const [isAuth , setIsAuth] = useState(localStorage.getItem("auth") || false)
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route element={isAuth ? <Layout /> : <Navigate to={"/"} />}>
            <Route path="products" element={<ProductsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App