import { type RouteRecordRaw } from 'vue-router';

export const Mainroutes: Array<RouteRecordRaw> = [
    {
        path: "/blog",
        name: "Blog",
        component: () => import('~/pages/Container.vue'),
        children: [
            {
                path: "/blog/index",
                name: "Blog",
                component: () => import("~/pages/blog/index.vue"),
            },

        ],
    },
];