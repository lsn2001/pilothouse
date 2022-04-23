import { createRouter, createWebHistory, } from "vue-router";
import { Mainroutes } from "./router.config";

/**
 * 创建路由
 */
const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory("/"),
  // history:createWebHashHistory(),
  routes: [...Mainroutes]
});

/**
 * 路由守卫
 */
router.beforeEach((guard) => {
});

/**
 * 路由错误回调
 */
router.onError((handler) => {
});

/**
 * 输出对象
 */
export default router;
