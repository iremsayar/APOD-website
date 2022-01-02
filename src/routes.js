import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from "./components/pages/Products";
import ProductDetail from './components/pages/ProductDetail';
import SearchProduct from './components/pages/SearchProduct';
import SearchResult from './components/pages/SearchResult';
import NotFound from './components/pages/NotFound';

const routes = [
    {title:"Home",path:"/",element:<Home/>, isNav:true},
    {title:"About",path:"about",element:<About/>, isNav:true},
    { title: "Pictures", path: "products", element: <Products />, isNav: true },
    { title: "Product Detail", path: "products/:productId", element: <ProductDetail />, isNav: false },
    { title: "Search", path: "searchProduct", element: <SearchResult />, isNav: false },
    { title: "Not found", path: "*", element: <NotFound />, isNav: false },
]

export default routes