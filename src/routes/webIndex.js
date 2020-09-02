import WebMain from '../views/WebMain.js';
import Subscribe from '../views/Subscribe.js';

const mainRoutes = [
    {
        name: 'WebMain',
        path: '/',
        component: WebMain,
    },
    {
        name: 'Subscribe',
        path: '/subscribe',
        component: Subscribe,
    },
]

export default mainRoutes;