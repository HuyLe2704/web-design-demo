import { NewHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Upload from '~/pages/Upload';
import CategoryPage from '~/pages/Category';
import Products from '~/pages/Products';
import Carts from '~/pages/Carts';
import Login from '~/pages/Login';
import ProductSale from '~/pages/ProductSale';
import Purchase from '~/pages/Purchase';
import OrderInfo from '~/pages/OrderInfo';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category/:id/:categoryName', component: CategoryPage },
    { path: '/products/:id', component: Products },
    { path: '/carts', component: Carts },
    { path: '/purchase', component: Purchase },
    { path: '/orderInfo', component: OrderInfo },
    { path: '/productSale/:productName', component: ProductSale },
    { path: '/register/', component: Register, layout: NewHeader },
    { path: '/login/', component: Login, layout: NewHeader },
    { path: '/upload/', component: Upload, layout: NewHeader },
];

export { publicRoutes };
