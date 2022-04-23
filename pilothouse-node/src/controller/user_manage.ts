import { Body, Controller, Get, Query, Post } from '@midwayjs/decorator';
import { FailResponse, SuccessResponse } from '../lib/response'
import { UserInfoRes, userId } from '../interface';
@Controller('/api/user_manage')
export class userManageController {
  // post get 接口 Demo

  @Get('/getUserInfo')
  async getUserInfo(@Query('userId') userId: userId) {
    console.log("userId", userId);

    return userId === 1 ?
      new SuccessResponse<UserInfoRes>({
        name: 'zhangsan',
        age: 18
      })
      :
      new FailResponse()

  }

  @Post('/postUserInfo')
  async postUserInfo(@Body('userId') userId: userId) {
    console.log("userId", userId);

    return userId === 1 ?
      new SuccessResponse<UserInfoRes>({
        name: 'zhangsan',
        age: 18
      })
      :
      new FailResponse()
  }
}
