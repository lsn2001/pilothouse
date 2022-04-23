import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1649487687969_5456',
    egg: {
      port: 5001,
    },

    // TODO 待解决 全局路由配置不上
    //globalPrefix: '/api'
  } as MidwayConfig;
};