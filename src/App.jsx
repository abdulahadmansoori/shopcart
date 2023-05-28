import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import AboutDev from './Pages/AboutDev'
import Orders from './Pages/Orders'
import ProductDetail from './Pages/ProductDetail'
import NotFound from './Pages/NotFound'
import Header from './Pages/Components/Header';
import CheckOut from './Pages/CheckOut';
import Footer from './Pages/Components/Footer';
const routes = [
  { path: '/', element: <Home />, exact: true },
  { path: '/home', element: <Home /> },
  { path: '/check-out', element: <CheckOut /> },
  { path: '/about-dev', element: <AboutDev /> },
  { path: '/orders', element: <Orders /> },
  // { path: '/product-detail', element: <ProductDetail /> },
  { path: '/product-detail/:id', element: <ProductDetail /> },
  // { path: '/products', element: Products },
  // { path: '/*', element: <NotFound /> },
];

const App = () => {
  return (<>
    <Header />

    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
      </Routes>
    </Router>

    <Footer />
  </>
  );
};

export default App;