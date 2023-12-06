import { NewHeader } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Register from '~/pages/Register';
import Upload from '~/pages/Upload';
import Notifications from '~/pages/Notifications';
import Products from '~/pages/Products';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/notifications/:id', component: Notifications },
    { path: '/products/:id', component: Products },
    { path: '/register/:id', component: Register, layout: NewHeader },
    { path: '/upload/:id', component: Upload, layout: NewHeader },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
