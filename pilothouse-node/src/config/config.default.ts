import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1649487687969_5456',
    egg: {
      port: 5001,
    },
    // cors: {
    //   credentials: false,
    // },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
