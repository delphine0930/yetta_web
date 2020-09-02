import MobileMain from '../views/MobileMain.js';
// import Subscribe from '../views/Subscribe.js';

var contextPath = "/m";

const mainRoutes = [
    {
        name: 'MobileMain',
        path: contextPath + '/',
        component: MobileMain,
    },
    // {
    //     name: 'Subscribe',
    //     path: contextPath + '/subscribe',
    //     component: Subscribe,
    // },
]

export default mainRoutes;