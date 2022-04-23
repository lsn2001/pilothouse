import { Rsp } from '../interface';

abstract class response<T = any> implements Rsp<T>{
    retCode: number;
    retMsg: string;
    data?: T;
}

export class SuccessResponse<T> extends response<T>{
    constructor(data: T) {
        super();
        this.retCode = 0;
        this.retMsg = 'success';
        this.data = data;
    }
}

export class FailResponse extends response {
    constructor() {
        super();
        this.retCode = -1;
        this.retMsg = 'fail';
    }
}