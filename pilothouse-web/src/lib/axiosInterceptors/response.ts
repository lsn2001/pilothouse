//import { ElMessage } from 'element-plus';
import { AxiosResponse } from "axios";

export const busiError = (response: AxiosResponse) => {
  const { data, config } = response;
  let { ret_code, ret_msg, ret, msg } = data;
  ret_code = ret_code === undefined ? ret : ret_code;
  ret_msg = ret_msg === undefined ? msg : ret_msg;
  if (ret_code !== 0 && response.config.meta?.autoBusiErr) {
    const errMsg = ret_msg || `请求${config.url}时发生了业务错误，请联系开发`;
    // ElMessage.error(`[${ret_code}|业务错误]：${errMsg}`);
    // ElMessage.error(`${errMsg}`);
  }
  return response.data;
};

export const sysError = (response: AxiosResponse) => {
  const { status, config } = response;
  if (status !== 200 && response.config.meta?.autoSysErr) {
    // ElMessage.error(`[${status}|系统错误]：请求${config.url}时发生了系统错误，请联系开发`);
    // ElMessage.error(`请求${config.url}时发生了系统错误，请联系开发`);
  }
  return response;
};
