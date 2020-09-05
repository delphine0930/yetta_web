import MobileMain from '../views/MobileMain.js';
import Subscribe from '../views/Subscribe.js';

const mainRoutes = [
    {
        name: 'MobileMain',
        path: "/" ,
        component: MobileMain,
    },
    {
        name: 'Subscribe',
        path: '/subscribe',
        component: Subscribe,
    },
]

export default mainRoutes;