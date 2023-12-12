import { NewHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Upload from '~/pages/Upload';
import Category from '~/pages/Category';
import Products from '~/pages/Products';
import Carts from '~/pages/Carts';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/category/', component: Category },
    { path: '/products/:id', component: Products },
    { path: '/carts', component: Carts },
    { path: '/register/', component: Register, layout: NewHeader },
    { path: '/upload/', component: Upload, layout: NewHeader },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
