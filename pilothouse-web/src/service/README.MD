# request 封装使用 demo

```ts
//引入request
import request from "~/service";
//请求类型定义
interface Req {
  useId: number;
}
//返回类型定义
interface Res {
  name: string;
  age: number;
}
const get15DaysWeatherByArea = (data: Req) => {
  // 请求返回类型传入泛型
  return request<Req, Res>({
    url: "/user/getUserInfo",
    method: "GET",
    data,
    interceptors: {
      requestInterceptors(res) {
        return res;
      },
      responseInterceptors(result) {
        return result;
      },
    },
  });
};
```
