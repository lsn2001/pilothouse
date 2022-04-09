import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { busiError, sysError } from './axiosInterceptors/response';

let config = {
    timeout: 35 * 1000, // Timeout
    baseUrL: '/api'
};

let axiosInstance = axios.create(config);

/**牢记response拦截器是先进先出 */
//先处理系统错误码
axiosInstance.interceptors.response.use(sysError);
//再处理业务错误码
axiosInstance.interceptors.response.use(busiError);

export default axiosInstance;
