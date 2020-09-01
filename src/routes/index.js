import Main from '../views/Main.js';
import Subscribe from '../views/Subscribe.js';

const mainRoutes = [
    {
        name: 'Main',
        path: '/',
        component: Main,
    },
    {
        name: 'Subscribe',
        path: '/subscribe',
        component: Subscribe,
    },
]

export default mainRoutes;