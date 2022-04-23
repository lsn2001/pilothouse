
export type userId = number;
//请求类型定义
export interface UserInfoReq {
    userId: userId;
}
//返回类型定义
export interface UserInfoRes {
    name: string;
    age: userId;
}