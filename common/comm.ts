// 定义基础类型 前后台共用类型
export interface Rsp<T> {
    retCode: number;
    retMsg: string;
    data?: T
}


