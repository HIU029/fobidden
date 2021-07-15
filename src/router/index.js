import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Catagory = () => import('../views/catagory/Catagory')
const Profile = () => import('../views/profile/Profile')
const Appear = () => import('../views/appear/Appear')

const NewList = () => import('../components/content/category/CategoryPicList')
const NewList_1 = () => import('../components/content/category/Cate_1')
const NewList_2 = () => import('../components/content/category/Cate_2')
const NewList_3 = () => import('../components/content/category/Cate_3')
// 创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/catagory',
        component: Catagory,
        children: [
            {
                path: 'list_1',
                component: NewList
            },
            {
                path: 'list_2',
                component: NewList_1
            },
            {
                path: 'list_3',
                component: NewList_2
            },
            {
                path: 'list_4',
                component: NewList_3
            },
        ]
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/appear',
        component: Appear
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // mode: history,
  routes
})

export default router
