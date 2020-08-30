import WebMain from '../views/web/WebMain.js';
import MobileMain from '../views/web/MobileMain.js';
import Subscribe from '../views/web/Subscribe.js';

const mainRoutes = [
    {
        name: 'WebMain',
        path: '/',
        component: WebMain,
    },
    {
        name: 'Subscribe',
        path: '/subscribe',
        component: Subscribe
    },
    {
        name: 'MobileMain',
        path: '/m',
        component: MobileMain,
    },
]

export default mainRoutes;