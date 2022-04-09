import { Controller, Get } from '@midwayjs/decorator';

@Controller('/home')
export class HomeController {
  @Get('/hello')
  async home() {
    return 'Hello Midwayjs!';
  }
}
