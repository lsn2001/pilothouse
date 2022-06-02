import { type AxiosResponse } from 'axios';


export const interceptorsOnFulfilled = (response: AxiosResponse) => {
    // 如果返回的retCode为0，说明接口请求成功，可以正常拿到数据        
    // 否则的话抛出错误
    if (response.data.retCode === 0) {
        return Promise.resolve(response);
    } else {
        alert("response.data.error");
        return Promise.reject(response);
    }
}


export const interceptorsonRejected = (error: any) => {
    if (error.response.status) {
        switch (error.response.status) {
            // 401: 未登录                
            // 未登录则跳转登录页面，并携带当前页面的路径                
            // 在登录成功后返回当前页面，这一步需要在登录页操作。                
            case 401:
                // router.replace({                   
                //   path: "/login",                    
                //   query: {                    
                //     redirect: router.currentRoute.fullPath                    
                //   }                    
                // });                    
                break;
            // 403 token过期                    
            // 登录过期对用户进行提示                    
            // 清除本地token和清空vuex中token对象                    
            // 跳转登录页面                
            case 403:
                // Toast({                    
                //   message: "登录过期，请重新登录",                    
                //   duration: 1000,                    
                //   forbidClick: true                    
                // });                    
                // // 清除token                    
                // localStorage.removeItem("token");                    
                // store.commit("loginSuccess", null);                    
                // // 跳转登录页面，并将要浏览的页面fullPath传过去，
                //登录成功后跳转需要访问的页面                    
                // setTimeout(() => {                    
                //   router.replace({                    
                //     path: "/login",                    
                //     query: {                    
                //       redirect: router.currentRoute.fullPath                    
                //     }                    
                //   });                    
                // }, 1000);                    
                break;
            // 404请求不存在                
            case 404:
                // Toast({                    
                //   message: "网络请求不存在",                    
                //   duration: 1500,                    
                //   forbidClick: true                    
                // });                    
                break;
            // 其他错误，直接抛出错误提示                
            default:
            // Toast({                    
            //   message: error.response.data.message,                    
            //   duration: 1500,                    
            //   forbidClick: true                    
            // });            
        }
    }

}